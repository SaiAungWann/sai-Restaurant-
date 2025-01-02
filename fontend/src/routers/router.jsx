import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

export default function Router() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact   />
                }
            ]
        },
    ])

  return (
    <RouterProvider router= {router} />
  )
}
