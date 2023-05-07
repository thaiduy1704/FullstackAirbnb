import express from "express";
import {
  createLocation,
  deleteLocationById,
  getLocations,
  updateLocationById,
} from "../../controllers/locationController.js";
const locationRouter = express.Router();

locationRouter.get("", getLocations);
locationRouter.post("", createLocation);
locationRouter.delete("/:locationId", deleteLocationById);
locationRouter.put("/:locationId", updateLocationById);

export { locationRouter };
