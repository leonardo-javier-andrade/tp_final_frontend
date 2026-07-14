import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext.jsx"
import "../../styles/Navbar.css"

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">TP Final</Link>

      <div className="navbar-links">
        {user ? (
          <>
            <span className="navbar-user">
              {user.username} ({user.role})
            </span>
            <button className="navbar-button" onClick={handleLogout}>Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-link">Iniciar sesión</Link>
            <Link to="/register" className="navbar-link">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export { Navbar }
