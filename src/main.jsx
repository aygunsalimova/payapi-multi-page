import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Pricing from './pages/Pricing.jsx'
import Contact from './pages/Contact.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    // errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About/>,
    // errorElement: <ErrorPage />
  },
  {
    path: "/pricing",
    element: <Pricing/>,
    // errorElement: <ErrorPage />
  },
  {
    path: "/contact",
    element: <Contact/>,
    // errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);