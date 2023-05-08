import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    phone: String,
    birthday: String,
    gender: String,
    address: String,
    type: String,
    __v: Number,
    avatar: String,
    tickets: [String],
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);
export default User;
