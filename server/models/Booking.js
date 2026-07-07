import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    email: {
      type: String,
    },

    project: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    message: {
      type: String,
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Booking", bookingSchema);
