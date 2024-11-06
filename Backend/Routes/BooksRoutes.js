import express from "express";
import { Books } from "../Models/BooksModel.js";

const Bookapp = express.Router();

// add books
Bookapp.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newBook = new Books(data);
    await newBook.save().then(() => {
      res.status(200).json({ message: "Book Added Succesfully" });
    });
  } catch (error) {
    console.log("Error add book in database: ", error);
    res.status(500).json({ message: "Error add book in database: " });
  }
});

// get all the books
Bookapp.get("/show", async (req, res) => {
  let books;
  try {
    books = await Books.find();
    res.status(200).json({ total: books.length, books });
  } catch (error) {
    console.log("Error to get all books: ", error);
    res.status(500).json({ message: "Error to get all books:" });
  }
});

// get by id
Bookapp.get("/show/:id", async (req, res) => {
  let book;
  const id = req.params.id;
  try {
    book = await Books.findById(id);
    res.status(200).json({ book });
  } catch (error) {
    console.log("Error to get book by id: ", error);
    res.status(500).json({ message: "Error to get book by id: " });
  }
});

// update book by id
Bookapp.put("/updatabook/:id", async (req, res) => {
  const id = req.params.id;
  const { BookName, description, author, image, price } = req.body;
  try {
    const Updatebook = await Books.findByIdAndUpdate(
      id,
      {
        BookName,
        description,
        author,
        image,
        price,
      },
      { new: true } // This option returns the updated document
    );

    res.status(200).json({ Updatebook, message: "Book Updated Successfully" });
  } catch (error) {
    console.log("Error updating the book: ", error);
    res.status(500).json({ message: "Error updating the book" });
  }
});

// deleate book by Id
Bookapp.delete("/deletebook/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Books.findByIdAndDelete(id).then(() =>
      res.status(201).json({ message: "Delete Successfully" })
    );
  } catch (error) {
    console.log("Error Delete the book by id: ", error);
    res.status(500).json({ message: "Error Delete the book by id" });
  }
});

export default Bookapp;
