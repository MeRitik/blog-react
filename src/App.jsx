import { createBrowserRouter, RouterProvider } from 'react-router'
import AppLayout from './components/AppLayout';
import Error from './components/Error';
import Hero from './pages/Hero';
import Admin from './pages/Admin';
import Blog from './components/Blog';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <><Hero /><Blog /></>
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
