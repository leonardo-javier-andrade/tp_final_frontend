import { axiosClient } from "../api/axiosClient.js"

const registerRequest = (username, email, password) => {
  return axiosClient.post("/auth/register", { username, email, password })
}

const loginRequest = (email, password) => {
  return axiosClient.post("/auth/login", { email, password })
}

export { registerRequest, loginRequest }
