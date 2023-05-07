import { successCode, failCode, errorCode } from "../utils/response.js";
import Location from "../models/Location.js";

const getLocations = async (req, res) => {
  try {
    const data = await Location.find();
    if (data) {
      successCode(res, data);
    } else {
      errorCode(res, "Not find Location");
    }
  } catch (error) {
    failCode(res);
  }
};

const createLocation = async (req, res) => {
  try {
    let { name, province, country, image, valueate, __v } = req.body;
    let data = {
      name,
      province,
      country,
      image,
      valueate,
      __v,
      deleteAt: false,
    };
    // console.log("data", data);
    const createData = await Location.create(data);
    if (createData) {
      successCode(res, createData);
      console.log(createData);
    } else {
      errorCode(res, "Don't Create Location");
    }
  } catch (error) {
    failCode(res);
  }
};
const deleteLocationById = async (req, res) => {
  try {
    const { locationId } = req.params;
    console.log(locationId);
    await Location.deleteMany({ _id: locationId });

    res.send("Success Delete Location");
  } catch (error) {
    failCode(error);
  }
};

const updateLocationById = async (req, res) => {
  try {
    const { locationId } = req.params;
    let { name, province, country, image, valueate, __v } = req.body;
    let data = {
      name,
      province,
      country,
      image,
      valueate,
      __v,
      deleteAt: false,
    };
    const updateData = await Location.updateOne({ _id: locationId }, data);
    if (updateData) {
      successCode(res, data);
    } else {
      errorCode(res, "Don't update locations");
    }
  } catch (error) {
    failCode(res);
  }
};

export { getLocations, createLocation, deleteLocationById, updateLocationById };
