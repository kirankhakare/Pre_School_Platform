import express from "express";
import {
  createFee,
  getFees,
  toggleFeeStatus,
  deleteFee
} from "../controllers/feeController.js";

const router = express.Router();

router.post("/create", createFee);
router.get("/all", getFees);
router.put("/toggle/:id", toggleFeeStatus);
router.delete("/delete/:id", deleteFee);

export default router;