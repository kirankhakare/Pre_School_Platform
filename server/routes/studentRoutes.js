import express from "express";
import {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
  getStudentById
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/create", createStudent);
router.get("/all", getStudents);
router.get("/:id", getStudentById);
router.put("/update/:id", updateStudent);
router.delete("/delete/:id", deleteStudent);

export default router;