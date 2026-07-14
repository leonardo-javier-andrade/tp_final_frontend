import { createContext, useContext, useEffect, useState } from "react"
import {
  login as loginController,
  register as registerController,
  logout as logoutController,
  getStoredUser
} from "../controllers/authController.js"

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setUser(getStoredUser())
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const loggedUser = await loginController(email, password)
    setUser(loggedUser)
    return loggedUser
  }

  const register = async (username, email, password) => {
    return registerController(username, email, password)
  }

  const logout = () => {
    logoutController()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
