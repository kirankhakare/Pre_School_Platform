import express from "express";
import {
  createTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher,
  getTeacherById
} from "../controllers/teacherController.js";

const router = express.Router();

router.post("/create", createTeacher);
router.get("/all", getTeachers);
router.get("/:id", getTeacherById);
router.put("/update/:id", updateTeacher);
router.delete("/delete/:id", deleteTeacher);

export default router;