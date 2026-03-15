import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    imageUrl: String
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", gallerySchema);