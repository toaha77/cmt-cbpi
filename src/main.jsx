import React from 'react'
import ReactDOM from 'react-dom/client'
 import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyCreatedRoute from './Routes/Route'
import AuthProvider from './Providers/AuthProviders'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

   <RouterProvider router={MyCreatedRoute}></RouterProvider>
    </AuthProvider>

   </React.StrictMode>,
)
