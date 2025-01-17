import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(true); // Track authentication state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setIsOpen(false);
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
    setIsOpen(false);
  };

  return (
    <div className="h-auto w-auto">
      <nav className="bg-zinc-700 w-full p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">Library</div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          {isSignedIn && (
            <div
              className={`absolute md:static top-16 left-0 w-full md:w-auto bg-zinc-700 md:bg-transparent p-4 md:p-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 transition-all ${
                isOpen ? "block" : "hidden"
              }`}
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
          )}
          {/* <div className="hidden md:flex">
            {isSignedIn ? (
              <button
                onClick={handleSignOut}
                className="text-white cursor-pointer hover:bg-slate-400 hover:text-black px-4 py-2 rounded-md"
              >
                Logout
              </button>
            ) : (
              <>
                <div className="mr-5">
                  <p className="text-white cursor-pointer hover:bg-slate-400 hover:text-black px-4 py-2 rounded-md">
                    <NavLink to="/signup" onClick={handleSignIn}>
                      SignUp
                    </NavLink>
                  </p>
                </div>
                <div className="ml-3">
                  <p className="text-white cursor-pointer hover:bg-slate-400 hover:text-black px-4 py-2 rounded-md">
                    <NavLink to="/login" onClick={handleSignIn}>
                      Login
                    </NavLink>
                  </p>
                </div>
              </>
            )}
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
