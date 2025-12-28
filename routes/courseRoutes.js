import express from "express";
import {
  previewCourses,
  purchaseCourse,
} from "../controllers/courseController.js";
export const courseRoutes = express.Router();

courseRoutes.get("/preview", previewCourses);
courseRoutes.post("/purchase", purchaseCourse);
