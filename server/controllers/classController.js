import Class from "../models/Class.js";


// Create Class
export const createClass = async (req, res) => {
  try {

    const { className, teacher, students } = req.body;

    const newClass = new Class({
      className,
      teacher,
      students
    });

    const savedClass = await newClass.save();

    res.status(201).json({
      success: true,
      message: "Class created successfully",
      data: savedClass
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error creating class",
      error: error.message
    });

  }
};



// Get All Classes
export const getClasses = async (req, res) => {
  try {

    const classes = await Class.find();

    res.status(200).json({
      success: true,
      data: classes
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error fetching classes",
      error: error.message
    });

  }
};



// Update Class
export const updateClass = async (req, res) => {
  try {

    const { id } = req.params;

    const updatedClass = await Class.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Class updated successfully",
      data: updatedClass
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error updating class",
      error: error.message
    });

  }
};



// Delete Class
export const deleteClass = async (req, res) => {
  try {

    const { id } = req.params;

    await Class.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Class deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error deleting class",
      error: error.message
    });

  }
};