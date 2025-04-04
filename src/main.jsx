import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Booking from './Components/Booking/Booking.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Tracking from './Components/Tracking/Tracking.jsx'
const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "Booking",
        element : <Booking/>
      },
      {
        path : "Contact",
        element : <Contact/>
      },
      {
        path : "Tracking",
        element : <Tracking/>
      }
    ]
    

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
