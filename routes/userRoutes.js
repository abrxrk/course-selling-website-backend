import express from "express";
import { login, myCourse, signup } from "../controllers/userController.js";

export const userRoutes = express.Router();

userRoutes.post("/signup", signup);
userRoutes.post("/login", login);
userRoutes.get("/purchases", myCourse);
