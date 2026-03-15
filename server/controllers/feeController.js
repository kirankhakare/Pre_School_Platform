import Fee from "../models/Fee.js";


// Create Fee
export const createFee = async (req, res) => {
  try {

    const { student, className, amount } = req.body;

    const newFee = new Fee({
      student,
      className,
      amount,
      status: "Unpaid"
    });

    const savedFee = await newFee.save();

    res.status(201).json({
      success: true,
      message: "Fee added successfully",
      data: savedFee
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error adding fee",
      error: error.message
    });

  }
};



// Get All Fees
export const getFees = async (req, res) => {
  try {

    const fees = await Fee.find();

    res.status(200).json({
      success: true,
      data: fees
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error fetching fees",
      error: error.message
    });

  }
};



// Toggle Paid / Unpaid Status
export const toggleFeeStatus = async (req, res) => {
  try {

    const { id } = req.params;

    const fee = await Fee.findById(id);

    if (!fee) {
      return res.status(404).json({
        success: false,
        message: "Fee record not found"
      });
    }

    fee.status = fee.status === "Paid" ? "Unpaid" : "Paid";

    const updatedFee = await fee.save();

    res.status(200).json({
      success: true,
      message: "Fee status updated",
      data: updatedFee
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error updating fee status",
      error: error.message
    });

  }
};



// Delete Fee
export const deleteFee = async (req, res) => {
  try {

    const { id } = req.params;

    await Fee.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Fee deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error deleting fee",
      error: error.message
    });

  }
};