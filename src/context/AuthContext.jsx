import { createContext, useState } from "react"
import { login as loginService, register as registerService, logout as logoutService, getStoredUser } from "../services/authService.js"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser())

  const login = async (email, password) => {
    const loggedUser = await loginService(email, password)
    setUser(loggedUser)
    return loggedUser
  }

  const register = async (username, email, password) => {
    return registerService(username, email, password)
  }

  const logout = () => {
    logoutService()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
