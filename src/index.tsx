import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import React from 'react'
import App from './App'

const routes = createRoutesFromElements(<Route path={'/'} element={<App />} />)

const router = createBrowserRouter(routes)

createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
