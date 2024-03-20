import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import React from 'react'
import App from './pages/App/App'

const Info = React.lazy(() => import('./pages/Info/Info'))

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={'/'} element={<App />}>
            <Route
                path={'info'}
                element={
                    <React.Suspense fallback={'loading'}>
                        <Info />
                    </React.Suspense>
                }
            />
        </Route>
    )
)

createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
