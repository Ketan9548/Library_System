import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Components/About.jsx";
import Addbooks from "./Components/Addbooks.jsx";
import Books from "./Components/Books.jsx";
import Signup from "./Components/Singup.jsx";
import Login from "./Components/Login.jsx";
import TermandCondition from "./Pages/TermandCondition.jsx";

function AuthWrapper() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Set true if token exists
  }, []);

  return isAuthenticated ? <App /> : <Navigate to="/signup" />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthWrapper>
        <App />
      </AuthWrapper>
    ),
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
        path: "/signup",
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
