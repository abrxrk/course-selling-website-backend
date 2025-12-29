import express from "express";
import {
  previewCourses,
  purchaseCourse,
} from "../controllers/courseController.js";
import { userAuth } from "../middlewares/userAuth.js";
export const courseRoutes = express.Router();

courseRoutes.get("/preview", previewCourses);
courseRoutes.post("/purchase", userAuth ,purchaseCourse);
