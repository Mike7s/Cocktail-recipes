import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Cocktailprova from './components/cocktailprova.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux'

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
  <Provider store={store}> 
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
)