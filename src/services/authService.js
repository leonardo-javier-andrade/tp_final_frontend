import { post } from "./apiClient.js"

const decodeToken = (token) => {
  try {
    const payload = token.split(".")[1]
    const decoded = JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/")))
    return decoded
  } catch {
    return null
  }
}

const register = async (username, email, password) => {
  const data = await post("/auth/register", { username, email, password })
  return data.data
}

const login = async (email, password) => {
  const data = await post("/auth/login", { email, password })
  const { token } = data.data

  localStorage.setItem("token", token)

  return decodeToken(token)
}

const logout = () => {
  localStorage.removeItem("token")
}

const getStoredUser = () => {
  const token = localStorage.getItem("token")
  if (!token) return null

  const user = decodeToken(token)
  if (!user || user.exp * 1000 < Date.now()) {
    localStorage.removeItem("token")
    return null
  }

  return user
}

export { register, login, logout, getStoredUser }
