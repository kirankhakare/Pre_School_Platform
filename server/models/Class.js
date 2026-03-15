import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    className: String,
    teacher: String,
    students: Number
  },
  { timestamps: true }
);

export default mongoose.model("Class", classSchema);