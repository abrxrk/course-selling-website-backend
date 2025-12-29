import express from "express";
import {
  addCourse,
  login,
  removeCourse,
  signup,
  updateCourse,
} from "../controllers/adminController.js";
import { adminAuth } from "../middlewares/adminAuth.js";

export const adminRoutes = express.Router();

adminRoutes.post("/signup", signup);
adminRoutes.post("/login", login);
adminRoutes.post("/addCourse", adminAuth, addCourse);
adminRoutes.put("/updateCourse", adminAuth, updateCourse);
adminRoutes.delete("/removeCourse", adminAuth, removeCourse);
