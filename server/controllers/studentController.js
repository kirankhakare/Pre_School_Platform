import Student from "../models/Student.js";


// Add Student
export const createStudent = async (req, res) => {
  try {

    const { name, className, parent, phone, document } = req.body;

    const newStudent = new Student({
      name,
      className,
      parent,
      phone,
      document
    });

    const savedStudent = await newStudent.save();

    res.status(201).json({
      success: true,
      message: "Student added successfully",
      data: savedStudent
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error adding student",
      error: error.message
    });

  }
};



// Get All Students
export const getStudents = async (req, res) => {
  try {

    const students = await Student.find();

    res.status(200).json({
      success: true,
      data: students
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error fetching students",
      error: error.message
    });

  }
};



// Update Student
export const updateStudent = async (req, res) => {
  try {

    const { id } = req.params;

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: updatedStudent
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error updating student",
      error: error.message
    });

  }
};



// Delete Student
export const deleteStudent = async (req, res) => {
  try {

    const { id } = req.params;

    await Student.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Student deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error deleting student",
      error: error.message
    });

  }
};



// Get Single Student
export const getStudentById = async (req, res) => {
  try {

    const { id } = req.params;

    const student = await Student.findById(id);

    res.status(200).json({
      success: true,
      data: student
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error fetching student",
      error: error.message
    });

  }
};