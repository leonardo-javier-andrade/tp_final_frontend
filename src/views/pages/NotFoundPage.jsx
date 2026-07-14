import { Link } from "react-router-dom"
import "../../styles/NotFoundPage.css"

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h2>404</h2>
      <p>La página que buscás no existe.</p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  )
}

export { NotFoundPage }
