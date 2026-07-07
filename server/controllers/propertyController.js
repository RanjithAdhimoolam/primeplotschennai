import Property from "../models/Property.js";

export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find().sort({
      createdAt: -1,
    });

    res.json(properties);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const getProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    res.json(property);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const addProperty = async (req, res) => {
  try {
    const images = req.files ? req.files.map((file) => file.filename) : [];

    const property = await Property.create({
      ...req.body,
      images,
    });

    res.status(201).json(property);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const updateProperty = async (req, res) => {
  try {
    const images = req.files
      ? req.files.map((file) => file.filename)
      : undefined;

    const data = {
      ...req.body,
    };

    if (images && images.length > 0) {
      data.images = images;
    }

    const property = await Property.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });

    res.json(property);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
export const searchProperties = async (req, res) => {
  try {
    const { location, approval } = req.query;

    const filter = {};

    if (location) {
      filter.location = {
        $regex: location,
        $options: "i",
      };
    }

    if (approval) {
      filter.approval = approval;
    }

    const properties = await Property.find(filter);

    res.json(properties);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const deleteProperty = async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Property Deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
