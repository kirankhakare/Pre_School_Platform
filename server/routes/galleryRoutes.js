import express from "express";
import {
  uploadPhoto,
  getPhotos,
  deletePhoto
} from "../controllers/galleryController.js";

const router = express.Router();

router.post("/upload", uploadPhoto);
router.get("/all", getPhotos);
router.delete("/delete/:id", deletePhoto);

export default router;