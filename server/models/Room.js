import mongoose from "mongoose";
import Location from "./Location.js";
const RoomSchema = new mongoose.Schema(
  {
    deleteAt: Boolean,
    _id: String,
    name: String,
    guests: Number,
    bedRoom: Number,
    bath: Number,
    description: String,
    price: Number,
    elevator: Boolean,
    hotTub: Boolean,
    pool: Boolean,
    indoorFireplace: Boolean,
    dryer: Boolean,
    gym: Boolean,
    kitchen: Boolean,
    wifi: Boolean,
    heating: Boolean,
    cableTV: Boolean,
    locationId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Location" }],
    __v: Number,
    image: String,
  },
  { timestamps: true }
);
const Room = mongoose.model("Room", RoomSchema);
export default Room;
