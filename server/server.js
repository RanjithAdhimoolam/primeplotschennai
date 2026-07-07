import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import createAdmin from "./utils/createAdmin.js";
import connectDB from "./config/db.js";
import path from "path";
import bookingRoutes from "./routes/bookingRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
dotenv.config();

connectDB();
createAdmin();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.get("/", (req, res) => {
  res.send("PrimePlots API Running 🚀");
});
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
