import Property from "../models/Property.js";
import Booking from "../models/Booking.js";
import Contact from "../models/Contact.js";

export const getDashboard = async (req, res) => {
  try {
    const totalProperties = await Property.countDocuments();
    const totalBookings = await Booking.countDocuments();
    const totalContacts = await Contact.countDocuments();

    res.json({
      totalProperties,
      totalBookings,
      totalContacts,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
