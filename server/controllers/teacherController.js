import Teacher from "../models/Teacher.js";


// Add Teacher
export const createTeacher = async (req, res) => {
  try {

    const { name, className, performance, salary } = req.body;

    const newTeacher = new Teacher({
      name,
      className,
      performance,
      salary
    });

    const savedTeacher = await newTeacher.save();

    res.status(201).json({
      success: true,
      message: "Teacher added successfully",
      data: savedTeacher
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error adding teacher",
      error: error.message
    });

  }
};



// Get All Teachers
export const getTeachers = async (req, res) => {
  try {

    const teachers = await Teacher.find();

    res.status(200).json({
      success: true,
      data: teachers
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error fetching teachers",
      error: error.message
    });

  }
};



// Update Teacher
export const updateTeacher = async (req, res) => {
  try {

    const { id } = req.params;

    const updatedTeacher = await Teacher.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Teacher updated successfully",
      data: updatedTeacher
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error updating teacher",
      error: error.message
    });

  }
};



// Delete Teacher
export const deleteTeacher = async (req, res) => {
  try {

    const { id } = req.params;

    await Teacher.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Teacher deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error deleting teacher",
      error: error.message
    });

  }
};



// Get Single Teacher
export const getTeacherById = async (req, res) => {
  try {

    const { id } = req.params;

    const teacher = await Teacher.findById(id);

    res.status(200).json({
      success: true,
      data: teacher
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error fetching teacher",
      error: error.message
    });

  }
};