import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import JavaScript from "./pages/JavaScript";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Opss Error!!! Page Not Found</div>,
  },
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javaScript",
    element: <JavaScript />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    </>
  </React.StrictMode>
);

serviceWorkerRegistration.register();