import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema(
  {
    title: String,
    message: String,
    target: String
  },
  { timestamps: true }
);

export default mongoose.model("Announcement", announcementSchema);