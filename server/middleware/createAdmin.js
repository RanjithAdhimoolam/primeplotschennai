import bcrypt from "bcryptjs";
import User from "../models/User.js";

const createAdmin = async () => {
  const exists = await User.findOne({
    email: "admin@primeplots.com",
  });

  if (exists) return;

  const password = await bcrypt.hash("Admin@123", 10);

  await User.create({
    name: "Administrator",
    email: "admin@primeplots.com",
    password,
    role: "admin",
  });

  console.log("✅ Default Admin Created");
};

export default createAdmin;
