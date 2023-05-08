import { successCode, failCode, errorCode } from "../utils/response.js";
import User from "../models/User.js";

const login = async (req, res) => {
  try {
    const { nameID } = req.params;
    const data = await User.find({ name: nameID });
    if (data) {
      successCode(res, data);
    } else {
      errorCode(res, "NO data");
    }
  } catch (error) {
    console.log(error);
    failCode(res);
  }
};
export { login };
