import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './components/layout/Layout'

export default function App() {
  const routers=createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
    ]}
  ])
  return <RouterProvider router={routers}>

  </RouterProvider>
}
