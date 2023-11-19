import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import LandingScreen from "../page/LandingScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
    ],
  },
]);
