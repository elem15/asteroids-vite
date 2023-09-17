import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './routes/root';
import ErrorPage from './error-page';
import Asteroids from './routes/asteroids/Asteroids';
import Cart from './routes/cart/Cart';
import Asteroid, { loader as asteroidLoader } from './routes/asteroid/Asteroid';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Asteroids />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "asteroid/:id",
        element: <Asteroid />,
        loader: asteroidLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
