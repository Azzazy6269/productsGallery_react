import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'

import MainLayout from './layouts/MainLayout.jsx'
import NotFound404 from './pages/NotFound404.jsx'
import Products from './pages/Products.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Cart from './pages/Cart.jsx'

const router = createBrowserRouter([
  {
    path:'*',
    element:<NotFound404/>
  },
  {
    path:'/',
    element:<MainLayout/>,
    children:[
      {
        path:'/products',
        element:<Products/>
      },
      {
        path:'/aboutUs',
        element:<AboutUs/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
