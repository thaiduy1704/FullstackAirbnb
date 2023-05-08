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
const getRoomByLocationId = async (req, res) => {
  try {
    const { locationId } = req.params;
    const data = await Room.find({ locationId: locationId });
    if (data) {
      successCode(res, data);
    } else {
      errorCode(res, "Not find Room by LocationID");
    }
  } catch (error) {
    failCode(error);
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

const deleteRoomById = async (req, res) => {
  try {
    const { roomId } = req.params;
    await Room.deleteMany({
      _id: roomId,
    });
    res.send(`Success Delete Room id ${roomId} `);
  } catch (error) {
    failCode(error);
  }
};
const createRoom = async (req, res) => {
  try {
    let {
      name,
      guests,
      bedRoom,
      bath,
      description,
      price,
      elevator,
      hotTub,
      pool,
      indoorFireplace,
      dryer,
      gym,
      kitchen,
      wifi,
      heating,
      cableTV,
      __v,
      image,
      locationId,
    } = req.body;
    let data = {
      name,
      guests,
      bedRoom,
      bath,
      description,
      price,
      elevator,
      hotTub,
      pool,
      indoorFireplace,
      dryer,
      gym,
      kitchen,
      wifi,
      heating,
      cableTV,
      __v,
      image,
      locationId,
      deleteAt: false,
    };
    const createData = await Room.create(data);
    if (createData) {
      successCode(res, createData);
      console.log(createData);
    } else {
      errorCode(res, "Don't Create Room");
    }
  } catch (error) {
    console.log(error);
    // failCode(res);
  }
};
const updateRoomById = async (req, res) => {
  try {
    const { roomId } = req.params;
    let {
      name,
      guests,
      bedRoom,
      bath,
      description,
      price,
      elevator,
      hotTub,
      pool,
      indoorFireplace,
      dryer,
      gym,
      kitchen,
      wifi,
      heating,
      cableTV,
      __v,
      image,
      locationId,
    } = req.body;
    let data = {
      name,
      guests,
      bedRoom,
      bath,
      description,
      price,
      elevator,
      hotTub,
      pool,
      indoorFireplace,
      dryer,
      gym,
      kitchen,
      wifi,
      heating,
      cableTV,
      __v,
      image,
      locationId,
      deleteAt: false,
    };
    const updateData = await Room.updateOne({ _id: roomId }, data);
    if (updateData) {
      successCode(res, data);
    } else {
      errorCode(res, "Don't update Room");
    }
  } catch (error) {
    failCode(res);
  }
};

export {
  getRooms,
  getRoomById,
  deleteRoomById,
  createRoom,
  updateRoomById,
  getRoomByLocationId,
};
