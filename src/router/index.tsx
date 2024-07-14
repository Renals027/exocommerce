import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login } from "../screens";
import { routes } from "./routes";

const router = createBrowserRouter([
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.home,
    element: <Home />,
  },
]);

export const RouterApp = () => {
  return <RouterProvider router={router} />;
};
