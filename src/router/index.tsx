import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

export const RouterApp = () => {
  return <RouterProvider router={router} />;
};
