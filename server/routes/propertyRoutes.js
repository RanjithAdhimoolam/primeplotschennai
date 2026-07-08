import express from "express";
import upload from "../middleware/upload.js";

import {
  getProperties,
  getProperty,
  addProperty,
  updateProperty,
  deleteProperty,
} from "../controllers/propertyController.js";

const router = express.Router();

router.get("/", getProperties);
//router.get("/search", searchProperties);
router.get("/:id", getProperty);

router.post("/", upload.array("images", 10), addProperty);

router.put("/:id", upload.array("images", 10), updateProperty);

router.delete("/:id", deleteProperty);

export default router;
