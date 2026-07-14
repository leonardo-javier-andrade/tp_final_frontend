import { axiosClient } from "../api/axiosClient.js"

const fetchProductsRequest = (filters = {}) => {
  return axiosClient.get("/products", { params: filters })
}

const fetchProductRequest = (id) => {
  return axiosClient.get(`/products/${id}`)
}

const createProductRequest = (product) => {
  return axiosClient.post("/products", product)
}

const updateProductRequest = (id, product) => {
  return axiosClient.put(`/products/${id}`, product)
}

const deleteProductRequest = (id) => {
  return axiosClient.delete(`/products/${id}`)
}

export {
  fetchProductsRequest,
  fetchProductRequest,
  createProductRequest,
  updateProductRequest,
  deleteProductRequest
}
