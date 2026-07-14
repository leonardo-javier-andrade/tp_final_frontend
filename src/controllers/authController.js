import { registerRequest, loginRequest } from "../models/UserModel.js"

const extractErrorMessage = (error) => {
  return error.response?.data?.error || "Ocurrió un error inesperado"
}

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
  try {
    const response = await registerRequest(username, email, password)
    return response.data.data
  } catch (error) {
    throw new Error(extractErrorMessage(error))
  }
}

const login = async (email, password) => {
  try {
    const response = await loginRequest(email, password)
    const { token } = response.data.data

    localStorage.setItem("token", token)

    const user = decodeToken(token)
    return user
  } catch (error) {
    throw new Error(extractErrorMessage(error))
  }
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
