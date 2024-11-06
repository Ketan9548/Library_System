import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addbooks = () => {
  const [data, setData] = useState({
    BookName: "",
    author: "",
    image: "",
    price: "",
    description: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3321/api/add", data);
      console.log("The response data is: ", res);
      toast.success("Data has been saved!");
      setData({
        BookName: "",
        author: "",
        image: "",
        price: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Failed to save data!");
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12">
      <div className="flex justify-center mt-2">
        <p className="font-bold text-2xl md:text-3xl lg:text-4xl">Add Books</p>
      </div>
      <div className="mt-4 md:mt-6">
        <form
          className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto space-y-4"
          onSubmit={submitData}
        >
          <div>
            <p className="text-center font-semibold">Book name</p>
            <input
              type="text"
              placeholder="Enter the book name"
              className="border border-gray-300 bg-slate-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="BookName"
              onChange={change}
              value={data.BookName}
            />
          </div>

          <div>
            <p className="text-center font-semibold">Author</p>
            <input
              type="text"
              placeholder="Enter author name"
              className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="author"
              onChange={change}
              value={data.author}
            />
          </div>

          <div>
            <p className="text-center font-semibold">Image</p>
            <input
              type="text"
              placeholder="Enter the URL of image"
              className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="image"
              onChange={change}
              value={data.image}
            />
          </div>

          <div>
            <p className="text-center font-semibold">Price</p>
            <input
              type="text"
              placeholder="Enter the Price of Book"
              className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="price"
              onChange={change}
              value={data.price}
            />
          </div>

          <div>
            <p className="text-center font-semibold">Description</p>
            <textarea
              rows="4"
              placeholder="Enter Description.."
              className="bg-slate-300 block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              name="description"
              onChange={change}
              value={data.description}
            ></textarea>
          </div>
          <div>
            <ToastContainer />
            <button
              type="submit"
              className="hover:bg-slate-400 border-2 border-black p-2 rounded-xl w-32 font-bold"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addbooks;
