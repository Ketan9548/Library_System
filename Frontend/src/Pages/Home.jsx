import { NavLink } from "react-router-dom";
import library from "../assets/StudentStudy.jpg";
import library1 from "../assets/StudentStudy1.jpg";

function Home() {
  return (
    <div className="h-screen w-full sm:bg-slate-700 sm:w-screen bg-slate-600 grid place-items-center">
      <div className="container mx-auto p-4 grid lg:grid-cols-2 gap-8 items-center">
        <div className="text-center lg:text-left lg:mt-24">
          <p className="text-4xl md:text-6xl font-bold text-white">
            Book store for Your Books.....
          </p>
          <div className="mt-4">
            <NavLink to="/bookslist">
              <button className="px-4 py-2 bg-slate-700 text-white font-medium rounded-md border-2 border-black hover:bg-white hover:text-black transition-colors">
                Show Books..
              </button>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <div className="sm:-ml-80 hover:pl-3 hover:cursor-pointer">
            <img
              src={library}
              alt="Student Studying"
              className="w-full h-48 sm:h-full  rounded-lg shadow-md"
            />
          </div>
          <p className="text-white font-bold text-center">
            The beautiful thing about learning is nobody can take it away from
            you....
          </p>
          <div className="sm:ml-24 hover:pl-3 hover:cursor-pointer">
            <img
              src={library1}
              alt="Student Studying"
              className="w-full h-48 md:h-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
