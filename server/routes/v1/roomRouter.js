import express from "express";

import { getRoomById, getRooms } from "../../controllers/roomController.js";

const roomRouter = express.Router();

roomRouter.get("", getRooms);
roomRouter.get("/:roomId", getRoomById);

export { roomRouter };
