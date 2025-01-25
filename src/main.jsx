import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import ProductListing from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cart from './pages/Cart.jsx'
const router=createBrowserRouter([{
  path:"/",
  element:<ProductListing/>
},{
  path:"/cart",
  element:<Cart/>
}])
function AppRender(){
  return(<StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>)
}
createRoot(document.getElementById('root')).render(
  <AppRender/>
)
