import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Header from './components/Main/Main';
import Blogs from './components/Blogs/Blogs';
import Main from './components/Main/Main';
import ChefRecipes from './components/Home/ChefRecipes';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AuthProviders from './components/AuthProviders/AuthProviders';
import ErrorPage from './components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path:"chefRecipes/:id",
        element:<ChefRecipes></ChefRecipes>
      },
      {
        path: "/login",
        element : <Login></Login>
      },
      {
        path: "/registration",
        element:<Registration></Registration>
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
