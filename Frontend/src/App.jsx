import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Fotter from "./Components/Fotter";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Fotter />
    </>
  );
}

export default App;
