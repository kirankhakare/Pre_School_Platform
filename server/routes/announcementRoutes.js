import express from "express";
import {
  createAnnouncement,
  getAnnouncements,
  deleteAnnouncement
} from "../controllers/announcementController.js";

const router = express.Router();

router.post("/create", createAnnouncement);
router.get("/all", getAnnouncements);
router.delete("/delete/:id", deleteAnnouncement);

export default router;