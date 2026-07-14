import { get, post, put, del } from "./apiClient.js"

const getProducts = async (filters = {}) => {
  const data = await get("/products", filters)
  return data.data
}

const getProduct = async (id) => {
  const data = await get(`/products/${id}`)
  return data.data
}

const createProduct = async (product) => {
  const data = await post("/products", product)
  return data.data
}

const updateProduct = async (id, product) => {
  const data = await put(`/products/${id}`, product)
  return data.data
}

const deleteProduct = async (id) => {
  const data = await del(`/products/${id}`)
  return data.data
}

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct }
