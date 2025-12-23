import express from "express";
import { previewCourses } from "../controllers/courseController";
export const courseRoutes = express.Router();

courseRoutes.get("/preview", previewCourses);
