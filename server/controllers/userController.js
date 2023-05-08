import { successCode, failCode, errorCode } from "../utils/response.js";
import User from "../models/User.js";

const getAllUser = async (req, res) => {
  try {
    const data = await User.find();
    if (data) {
      successCode(res, data);
    } else {
      errorCode(res, "Not find User");
    }
  } catch (error) {
    failCode(error);
  }
};
export { getAllUser };
