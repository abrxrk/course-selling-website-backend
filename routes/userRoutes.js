import express from "express";
import { login, myCourse, signup } from "../controllers/userController.js";
import { userAuth } from "../middlewares/userAuth.js";

export const userRoutes = express.Router();

userRoutes.post("/signup",  signup);  
userRoutes.post("/login", login);
userRoutes.get("/purchases", userAuth, myCourse);
