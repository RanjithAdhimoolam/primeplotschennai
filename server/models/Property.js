import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    approval: {
      type: String,
      required: true,
      enum: ["DTCP", "CMDA", "RERA"],
    },

    price: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      required: true,
    },

    roadWidth: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    amenities: {
      type: [String],
      default: [],
    },

    images: {
      type: [String],
      default: [],
    },

    mapLocation: {
      type: String,
      required: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Property", propertySchema);
