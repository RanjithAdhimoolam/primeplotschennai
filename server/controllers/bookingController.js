import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    res.status(201).json({
      success: true,
      message: "Booking Created Successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({
      createdAt: -1,
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Booking Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
