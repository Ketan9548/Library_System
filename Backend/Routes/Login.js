import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../Models/UserinfoModel.js";
import dotenv from "dotenv";

const Loginrouter = express.Router();
dotenv.config();

// Singhin Route
Loginrouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // check if user is already exits
    const userexits = await User.findOne({ email });
    if (!userexits) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, userexits.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Generated JWT Token
    const token = jwt.sign({ userId: userexits._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ Token: token });
  } catch (error) {
    res.status(500).json({ message: "Server Error in Login" });
  }
});

export default Loginrouter;
