import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Components/About.jsx";
import Addbooks from "./Components/Addbooks.jsx";
import Books from "./Components/Books.jsx";
import Signup from "./Components/Singup.jsx";
import Login from "./Components/Login.jsx";
import TermandCondition from "./Pages/TermandCondition.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/addbooks",
        element: <Addbooks />,
      },
      {
        path: "/bookslist",
        element: <Books />,
      },
      {
        path: "/singup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/termandCondition",
        element: <TermandCondition />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
