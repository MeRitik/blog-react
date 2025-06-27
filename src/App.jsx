import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppLayout from './components/AppLayout';
import Error from './components/Error';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Admin from './pages/Admin';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/admin',
        element: <Admin />
      }
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
