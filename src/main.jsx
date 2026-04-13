import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import Navbar from './component/Navbar/Navbar.jsx'

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}


const router = createBrowserRouter([
 {
  path:"/",
  element: <MainLayout></MainLayout>,
  children : [
     {
    path:"/",
    element:<div>welcome to my home</div>
  },
  {
    path:"/contact",
    element:<div>contact Me are you sucessful</div>
  }
  ]
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
