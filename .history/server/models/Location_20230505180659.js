import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema(
  {
    name: String,
    province: String,
    country: String,
    valueate: Number,
    __v: Number,
    image: String,
    deleteAt: Boolean,
  },
  { timestamps: true }
);

const Location = mongoose.model("Location", ProductSchema);
