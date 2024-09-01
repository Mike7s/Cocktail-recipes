import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
// import CocktailDetails from './components/CocktailDetails.jsx'
import Cocktailprova from './components/cocktailprova.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cocktail/:cocktailId",
    element: <Cocktailprova/>,
  },
 
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)