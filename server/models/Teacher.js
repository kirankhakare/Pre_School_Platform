import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    name: String,
    className: String,
    performance: String,
    salary: Number
  },
  { timestamps: true }
);

export default mongoose.model("Teacher", teacherSchema);