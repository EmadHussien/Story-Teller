import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";
import App from "./App";
import AddPost from "./components/AddPost";
import Home from "./components/Home";

// Data provider api
// femorix505@bymercy.com
// 12345678
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/post",
        element: <AddPost />
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/  " />
  }
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <RouterProvider router={Routes} />
);
