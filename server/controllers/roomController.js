import { successCode, failCode, errorCode } from "../utils/response.js";
import Room from "../models/Room.js";

const getRooms = async (req, res) => {
  try {
    const data = await Room.find();
    if (data) {
      successCode(res, data);
    } else {
      errorCode(res, "Not find Room");
    }
  } catch (error) {
    failCode(res);
  }
};

const getRoomById = async (req, res) => {
  try {
    const { roomId } = req.params;
    const data = await Room.findById({ _id: roomId });
    if (data) {
      successCode(res, data);
    } else {
      errorCode(res, "Not find Room");
    }
  } catch (error) {
    failCode(res);
  }
};
export { getRooms, getRoomById };
