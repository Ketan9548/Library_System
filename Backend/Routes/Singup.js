import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../Models/UserinfoModel.js";
import dotenv from 'dotenv'

const Singuprouter = express.Router();
dotenv.config();

// Singhin Route
Singuprouter.post("/sigup", async (req, res) => {
  const { Username, email, password } = req.body;

  try {
    if (!Username || !email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const Userexits = await User.findOne({ email });

    if (Userexits) {
      return res.status(400).json({ message: "User already exists" });
    }

    // HashPassword Generated
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new User
    const newUser = new User({ Username, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ message: "User is registration succesfuly", Genratedtoken: token });
  } catch (error) {
    res.status(500).json({ message: "Server Error in Singup" });
  }
});

export default Singuprouter;
