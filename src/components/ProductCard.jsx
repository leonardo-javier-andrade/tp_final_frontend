import "../styles/ProductCard.css"

const ProductCard = ({ product, isAdmin, onEdit, onDelete }) => {
  return (
    <article className="product-card">
      <header className="product-card-header">
        <h3>{product.name}</h3>
        <span className={`product-badge ${product.available ? "available" : "unavailable"}`}>
          {product.available ? "Disponible" : "Sin stock"}
        </span>
      </header>

      <dl className="product-card-details">
        <div>
          <dt>Categoría</dt>
          <dd>{product.category}</dd>
        </div>
        <div>
          <dt>Precio</dt>
          <dd>${product.price}</dd>
        </div>
        <div>
          <dt>Stock</dt>
          <dd>{product.stock}</dd>
        </div>
        {isAdmin && (
          <div>
            <dt>Creado por</dt>
            <dd>{product.email}</dd>
          </div>
        )}
      </dl>

      <footer className="product-card-actions">
        <button className="btn btn-secondary" onClick={() => onEdit(product)}>Editar</button>
        <button className="btn btn-danger" onClick={() => onDelete(product._id)}>Eliminar</button>
      </footer>
    </article>
  )
}

export { ProductCard }
