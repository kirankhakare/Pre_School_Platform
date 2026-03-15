import mongoose from "mongoose";

const feeSchema = new mongoose.Schema(
  {
    student: String,
    className: String,
    amount: Number,
    status: {
      type: String,
      default: "Unpaid"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Fee", feeSchema);