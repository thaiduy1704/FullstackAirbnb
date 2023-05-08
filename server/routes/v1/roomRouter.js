import express from "express";

import {
  createRoom,
  deleteRoomById,
  getRoomById,
  getRoomByLocationId,
  getRooms,
  updateRoomById,
} from "../../controllers/roomController.js";

const roomRouter = express.Router();

roomRouter.get("", getRooms);
roomRouter.get("/:roomId", getRoomById);
roomRouter.get("/bylocation/:locationId", getRoomByLocationId);
roomRouter.delete("/:roomId", deleteRoomById);
roomRouter.post("", createRoom);
roomRouter.put("/:roomId", updateRoomById);
export { roomRouter };
