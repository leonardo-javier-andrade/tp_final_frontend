import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext.jsx"
import { Navbar } from "./views/components/Navbar.jsx"
import { PrivateRoute } from "./views/components/PrivateRoute.jsx"
import { LoginPage } from "./views/pages/LoginPage.jsx"
import { RegisterPage } from "./views/pages/RegisterPage.jsx"
import { ProductsPage } from "./views/pages/ProductsPage.jsx"
import { NotFoundPage } from "./views/pages/NotFoundPage.jsx"
import "./styles/App.css"

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
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
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
