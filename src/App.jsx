import { createBrowserRouter, RouterProvider } from 'react-router'
import Error from './components/Error';
import Admin from './pages/Admin';
import Blogs from './components/Blogs';
import Home from './pages/Home';
import Blog from './pages/Blog';

const router = createBrowserRouter([
  {
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blog',
        element: <Blogs />
      },
      {
        path: '/blog/:id',
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
