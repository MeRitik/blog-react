import Error from './components/Error';
import Blogs from './components/Blogs';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Layout from './pages/admin/Layout';
import Dashboard from './pages/admin/Dashboard';
import AddBlog from './pages/admin/AddBlog';
import ListBlog from './pages/admin/ListBlog';
import Comments from './pages/admin/Comments';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/admin/Login';

import 'quill/dist/quill.snow.css';

const isAuthenticated = true

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
        path: '/login',
        element: <Login />
      },
      {
        path: '/admin',
        element: (isAuthenticated ? <Layout /> : <Login />),
        children: [
          {
            index: true,
            element: <Dashboard />
          },
          {
            path: 'add-blog',
            element: <AddBlog />
          },
          {
            path: 'list-blog',
            element: <ListBlog />
          },
          {
            path: 'comments',
            element: <Comments />
          },
        ],
      },
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
