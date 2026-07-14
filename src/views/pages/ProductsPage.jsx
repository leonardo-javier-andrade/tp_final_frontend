import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext.jsx"
import { getProducts, createProduct, updateProduct, deleteProduct } from "../../controllers/productController.js"
import { ProductCard } from "../components/ProductCard.jsx"
import { ProductForm } from "../components/ProductForm.jsx"
import "../../styles/ProductsPage.css"

const ProductsPage = () => {
  const { user } = useAuth()
  const isAdmin = user?.role === "admin"

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [editingProduct, setEditingProduct] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  const loadProducts = async (filters = {}) => {
    setLoading(true)
    setError("")
    try {
      const data = await getProducts(filters)
      setProducts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const handleFilterSubmit = (event) => {
    event.preventDefault()
    const filters = {}
    if (search) filters.search = search
    if (category) filters.category = category
    loadProducts(filters)
  }

  const handleCreateOrUpdate = async (formData) => {
    setError("")
    try {
      if (editingProduct) {
        await updateProduct(editingProduct._id, formData)
      } else {
        await createProduct(formData)
      }
      setEditingProduct(null)
      await loadProducts()
    } catch (err) {
      setError(err.message)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm("¿Eliminar este producto?")) return
    setError("")
    try {
      await deleteProduct(id)
      await loadProducts()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="products-page">
      <section className="products-panel">
        <h2>Productos</h2>

        <form className="products-filters" onSubmit={handleFilterSubmit}>
          <input
            placeholder="Buscar por nombre"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            placeholder="Categoría"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button type="submit" className="btn btn-secondary">Filtrar</button>
        </form>

        {error && <p className="products-error">{error}</p>}

        {loading ? (
          <p>Cargando productos...</p>
        ) : products.length === 0 ? (
          <p>No hay productos para mostrar.</p>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                isAdmin={isAdmin}
                onEdit={setEditingProduct}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </section>

      <aside className="products-form-panel">
        <ProductForm
          initialProduct={editingProduct}
          onSubmit={handleCreateOrUpdate}
          onCancel={() => setEditingProduct(null)}
        />
      </aside>
    </div>
  )
}

export { ProductsPage }
