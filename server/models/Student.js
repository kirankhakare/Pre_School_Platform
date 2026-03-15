import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: String,
    className: String,
    parent: String,
    phone: String,
    document: String
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);