import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <nav className="bg-zinc-700 w-screen p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Library</div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div
            className={`md:flex space-x-6 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <p className="text-white hover:text-gray-300 transition duration-200">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </p>
            <p className="text-white hover:text-gray-300 transition duration-200">
              <NavLink
                to="/addbooks"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={() => setIsOpen(false)}
              >
                Add Books
              </NavLink>
            </p>
            <p className="text-white hover:text-gray-300 transition duration-200">
              <NavLink
                to="/bookslist"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={() => setIsOpen(false)}
              >
                Books
              </NavLink>
            </p>
            <p className="text-white hover:text-gray-300 transition duration-200">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </p>
          </div>
          <div className="flex">
            <div className="mr-5">
              <p className="text-white cursor-pointer hover:bg-slate-400 hover:text-black">
                <NavLink to="/signup">SignUp</NavLink>
              </p>
            </div>
            <div className="ml-3">
              <p className="text-white cursor-pointer hover:bg-slate-400 hover:text-black">
                <NavLink to="/login">Login</NavLink>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
