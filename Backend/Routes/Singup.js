import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../Models/UserinfoModel";

const router = express.Router();

// Singhin Route
router.post("/sigup", async (req, res) => {
  const { Username, email, password } = req.body;

  try {
    // check if user is already exits
    const Userexits = await User.findOne({ email });
    if (Userexits) {
      return res.status(400).json({ message: "User already exists" });
    }

    // HashPassword Generated
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    // Create a new User
  } catch (error) {}
});
