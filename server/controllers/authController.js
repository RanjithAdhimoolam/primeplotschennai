import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({
        message: "Invalid Email",
      });

    const match = await bcrypt.compare(password, user.password);

    if (!match)
      return res.status(400).json({
        message: "Invalid Password",
      });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
