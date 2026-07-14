import { useState } from "react"
import "../styles/ProductForm.css"

const emptyProduct = { name: "", price: 0, category: "", stock: 0 }

const ProductForm = ({ initialProduct, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(
    initialProduct
      ? {
          name: initialProduct.name,
          price: initialProduct.price,
          category: initialProduct.category,
          stock: initialProduct.stock
        }
      : emptyProduct
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? Number(value) : value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(formData)
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>{initialProduct ? "Editar producto" : "Nuevo producto"}</h3>

      <label>
        Nombre
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Categoría
        <input name="category" value={formData.category} onChange={handleChange} required />
      </label>

      <label>
        Precio
        <input type="number" name="price" min="0" step="0.01" value={formData.price} onChange={handleChange} required />
      </label>

      <label>
        Stock
        <input type="number" name="stock" min="0" value={formData.stock} onChange={handleChange} required />
      </label>

      <div className="product-form-actions">
        <button type="submit" className="btn btn-primary">Guardar</button>
        {initialProduct && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
        )}
      </div>
    </form>
  )
}

export { ProductForm }
