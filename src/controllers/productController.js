import {
  fetchProductsRequest,
  fetchProductRequest,
  createProductRequest,
  updateProductRequest,
  deleteProductRequest
} from "../models/ProductModel.js"

const extractErrorMessage = (error) => {
  return error.response?.data?.error || "Ocurrió un error inesperado"
}

const getProducts = async (filters) => {
  try {
    const response = await fetchProductsRequest(filters)
    return response.data.data
  } catch (error) {
    throw new Error(extractErrorMessage(error))
  }
}

const getProduct = async (id) => {
  try {
    const response = await fetchProductRequest(id)
    return response.data.data
  } catch (error) {
    throw new Error(extractErrorMessage(error))
  }
}

const createProduct = async (product) => {
  try {
    const response = await createProductRequest(product)
    return response.data.data
  } catch (error) {
    throw new Error(error.response?.data?.message || extractErrorMessage(error))
  }
}

const updateProduct = async (id, product) => {
  try {
    const response = await updateProductRequest(id, product)
    return response.data.data
  } catch (error) {
    throw new Error(extractErrorMessage(error))
  }
}

const deleteProduct = async (id) => {
  try {
    const response = await deleteProductRequest(id)
    return response.data.data
  } catch (error) {
    throw new Error(extractErrorMessage(error))
  }
}

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct }
