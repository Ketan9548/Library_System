import { User } from "../Models/UserinfoModel.js";
import express from "express";

const Userapp = express.Router();

// Middleware to parse JSON data
Userapp.use(express.json());


// created user
Userapp.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => res.json({ message: "user created succesfully", user }))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// get all the users 
Userapp.get("/showusers", async (req, res) => {
  let Users;
  try {
    Users = await User.find();
    res.status(200).json({ total: Users.length, Users });
  } catch (error) {
    console.log("Error to get all Users: ", error);
    res.status(500).json({ message: "Error to get all Users:" });
  }
});

// deleate the user by id
Userapp.delete("/deleteUser/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id).then(() =>
      res.status(201).json({ message: "Delete Successfully" })
    );
  } catch (error) {
    console.log("Error Delete the User by id: ", error);
    res.status(500).json({ message: "Error Delete the User by id" });
  }
});

export default Userapp;
