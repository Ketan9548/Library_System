import { User } from "../Models/UserinfoModel.js";
import express from "express";

const Userapp = express.Router();

// Middleware to parse JSON data
Userapp.use(express.json());

Userapp.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => res.json({ message: "user created succesfully", user }))
    .catch((err) => res.status(500).json({ error: err.message }));
});

export default Userapp;
