# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and typescript-eslint in your project.

## Uso de la página

Esta aplicación es un catálogo de productos con autenticación de usuarios:

1. **Registro / Login**: al ingresar sin sesión activa, la app redirige a `/login`. Desde ahí también se puede acceder a `/register` para crear una cuenta nueva.
2. **Listado de productos**: una vez logueado, se muestra el listado de productos en la página principal (`/`). Se pueden filtrar por nombre y por categoría usando el formulario de búsqueda.
3. **Alta, edición y eliminación**: los usuarios con rol de **administrador** ven además un formulario para crear productos nuevos, y pueden editar o eliminar los productos existentes desde cada tarjeta del listado.
4. **Rutas protegidas**: el acceso al listado de productos requiere estar autenticado (`PrivateRoute`); cualquier ruta no definida muestra una página de error 404.

Para levantar el proyecto en modo desarrollo:

```bash
npm install
npm run dev
```

---

Alumno: **Leonardo Andrade**
