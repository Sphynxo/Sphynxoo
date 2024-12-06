import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Tools from "./Pages/Tools";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import Layout from "./Components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about-me", element: <About /> },
      { path: "/tools", element: <Tools /> },
      { path: "/my-works", element: <Works /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
