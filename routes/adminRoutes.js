import express from "express";
import {
  addCourse,
  login,
  removeCourse,
  signup,
  updateCourse,
} from "../controllers/adminController";
export const adminRoutes = express.Router();

adminRoutes.post("/signup", signup);
adminRoutes.post("/login", login);
adminRoutes.post("/addCourse", addCourse);
adminRoutes.put("/updateCourse", updateCourse);
adminRoutes.delete("/removeCourse", removeCourse);
