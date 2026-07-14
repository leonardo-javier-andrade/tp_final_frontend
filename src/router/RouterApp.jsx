import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "../components/Navbar.jsx"
import { PrivateRoute } from "../components/PrivateRoute.jsx"
import { LoginPage } from "../pages/LoginPage.jsx"
import { RegisterPage } from "../pages/RegisterPage.jsx"
import { ProductsPage } from "../pages/ProductsPage.jsx"
import { NotFoundPage } from "../pages/NotFoundPage.jsx"
import "../styles/App.css"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <ProductsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export { RouterApp }
