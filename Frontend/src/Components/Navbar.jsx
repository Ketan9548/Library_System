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
            <NavLink
              to="/"
              className="text-white hover:text-gray-300 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/addbooks"
              className="text-white hover:text-gray-300 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Add Books
            </NavLink>
            <NavLink
              to="/bookslist"
              className="text-white hover:text-gray-300 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Books
            </NavLink>
            <NavLink
              to="/about"
              className="text-white hover:text-gray-300 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
