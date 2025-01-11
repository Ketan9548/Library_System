import { NavLink } from "react-router-dom";
import library from "../assets/StudentStudy.jpg";
import library1 from "../assets/StudentStudy1.jpg";

function Home() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="h-screen sm:bg-slate-700 bg-slate-600 flex items-center justify-center">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center max-w-screen-lg">
            {/* Text Section */}
            <div className="text-center lg:text-left">
              <p className="text-4xl md:text-6xl font-bold text-white">
                Book store for Your Books.....
              </p>
              <div className="mt-4">
                <NavLink to="/bookslist">
                  <button className="px-6 py-3 bg-slate-700 text-white font-medium rounded-md border-2 border-black hover:bg-white hover:text-black transition-colors">
                    Show Books..
                  </button>
                </NavLink>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex flex-col items-center space-y-6">
              <div className="hover:scale-105 transition-transform">
                <img
                  src={library}
                  alt="Student Studying"
                  className="w-80 sm:w-96 rounded-lg shadow-md"
                />
              </div>
              <p className="text-white font-bold text-center">
                The beautiful thing about learning is nobody can take it away
                from you....
              </p>
              <div className="hover:scale-105 transition-transform">
                <img
                  src={library1}
                  alt="Student Studying"
                  className="w-80 sm:w-96 rounded-lg shadow-md"
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
