import { NavLink } from "react-router-dom";
import library from "../assets/StudentStudy.jpg";
import library1 from "../assets/StudentStudy1.jpg";

function Home() {
  return (
    <>
      <div className="h-screen w-auto bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
        <div className="h-screen w-auto flex items-center justify-center">
          <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center max-w-screen-xl">
            {/* Text Section */}
            <div className="text-center lg:text-left space-y-6">
              <p className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Your Favorite Book Store Awaits...
              </p>
              <p className="text-lg md:text-xl text-gray-300">
                Discover, learn, and explore from our vast collection of books.
              </p>
              <div>
                <NavLink to="/bookslist">
                  <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg border-2 border-transparent hover:bg-blue-500 hover:border-white transition-all duration-200">
                    Show Books
                  </button>
                </NavLink>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex flex-col items-center space-y-6">
              <div className="relative group hover:scale-105 transition-transform duration-200">
                <img
                  src={library}
                  alt="Student Studying"
                  className="w-80 sm:w-96 rounded-lg shadow-xl border-4 border-gray-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <p className="text-white font-semibold text-center">
                    Knowledge is Power
                  </p>
                </div>
              </div>
              <p className="text-gray-300 font-medium text-center max-w-md">
                The beautiful thing about learning is that nobody can take it
                away from you.
              </p>
              <div className="hover:scale-105 transition-transform duration-200">
                <img
                  src={library1}
                  alt="Student Studying"
                  className="w-80 sm:w-96 rounded-lg shadow-xl border-4 border-gray-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
