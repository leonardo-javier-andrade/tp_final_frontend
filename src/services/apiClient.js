const BASE_URL = import.meta.env.VITE_API_URL

const buildUrl = (path, params) => {
  const url = new URL(path, BASE_URL)
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== "") url.searchParams.set(key, value)
    })
  }
  return url
}

const buildHeaders = (hasBody) => {
  const headers = {}
  if (hasBody) headers["Content-Type"] = "application/json"

  const token = localStorage.getItem("token")
  if (token) headers.Authorization = `Bearer ${token}`

  return headers
}

const request = async (path, { method = "GET", body, params } = {}) => {
  const response = await fetch(buildUrl(path, params), {
    method,
    headers: buildHeaders(body !== undefined),
    body: body !== undefined ? JSON.stringify(body) : undefined
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(data?.error || data?.message || "Ocurrió un error inesperado")
  }

  return data
}

const get = (path, params) => request(path, { params })
const post = (path, body) => request(path, { method: "POST", body })
const put = (path, body) => request(path, { method: "PUT", body })
const del = (path) => request(path, { method: "DELETE" })

export { get, post, put, del }
