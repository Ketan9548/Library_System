import { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [data, setData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [updatedBookDetails, setUpdatedBookDetails] = useState({
    BookName: "",
    price: "",
    author: "",
    description: "",
    category: "",
  });
  const url = "http://localhost:3321/api/show";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        let val = Object.entries(res.data.books);
        setData(val);
        console.log(val);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  }, [url]);

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3321/api/deletebook/${id}`);
      setData((prevData) => prevData.filter((item) => item[1]._id !== id));
    } catch (err) {
      console.error("Error deleting item: ", err);
    }
  };

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBookDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const Updatevalue = async (id) => {
    try {
      await axios.put(
        `http://localhost:3321/api/updatabook/${id}`,
        updatedBookDetails
      );
      setData((prevData) =>
        prevData.map((item) => {
          if (item[1]._id === id) {
            return [item[0], { ...item[1], ...updatedBookDetails }];
          }
          return item;
        })
      );
      setSelectedBook(null);
      setUpdatedBookDetails({
        BookName: "",
        price: "",
        author: "",
        description: "",
        category: "",
      });
    } catch (error) {
      console.error("Error updating item: ", error);
    }
  };

  const selectedCategories = [
    "Action",
    "Adventure",
    "Comedy",
    "Mythology",
    "Suspense",
    "Historical Fiction",
    "Horror",
    "Literary Fiction",
    "Romance",
    "Romance Fiction",
  ];

  const sizeofbooks = data.length;

  return (
    <>
      <div>
        <p className="flex justify-center font-bold text-3xl">
          All Books : {sizeofbooks}
        </p>
      </div>
      <div className="grid w-screen grid-cols-1 pl-2 pr-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5 mb-5">
        {data.map((val, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg w-full h-72 object-cover"
                src={val[1].image}
                alt=""
              />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Book Name: {val[1].BookName}
              </h5>
              <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                Price: {val[1].price}
              </p>
              <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                Author: {val[1].author}
              </p>
              <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                Category: {val[1].category}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Description: {val[1].description}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Updated At: {new Date(val[1].updatedAt).toLocaleString("en-us")}
              </p>
            </div>
            <div className="flex justify-around">
              <div className="ml-3 mb-3">
                <p className="bg-red-400 w-28 flex justify-center border-2 border-black rounded-xl">
                  <button onClick={() => deleteItem(val[1]._id)}>Delete</button>
                </p>
              </div>
              <div className="ml-3 mb-3">
                <p className="bg-yellow-200 w-28 flex justify-center border-2 border-black rounded-xl">
                  <button
                    onClick={() => {
                      setSelectedBook(val[1]);
                      setUpdatedBookDetails({
                        BookName: val[1].BookName,
                        price: val[1].price,
                        author: val[1].author,
                        description: val[1].description,
                        category: val[1].category,
                      });
                    }}
                  >
                    Update
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedBook && (
        <div className="bg-slate-400 w-full h-f">
          <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900">
                Update Book: {selectedBook.BookName}
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Book Name
                  </label>
                  <input
                    type="text"
                    name="BookName"
                    value={updatedBookDetails.BookName}
                    onChange={handleUpdateInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter book name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={updatedBookDetails.price}
                    onChange={handleUpdateInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter book price"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={updatedBookDetails.author}
                    onChange={handleUpdateInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter author's name"
                  />
                </div>
                <div>
                  <p className="text-center font-semibold">Category</p>
                  <select
                    className="bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    name="category"
                    onChange={handleUpdateInputChange}
                    value={updatedBookDetails.category}
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {selectedCategories.map((val, index) => (
                      <option key={index} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={updatedBookDetails.description}
                    onChange={handleUpdateInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter book description"
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => Updatevalue(selectedBook._id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedBook(null)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Books;
