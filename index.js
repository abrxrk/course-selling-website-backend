import express from "express";
import { userRoutes } from "./routes/userRoutes";
import { courseRoutes } from "./routes/courseRoutes";
import { adminRoutes } from "./routes/adminRoutes";
const app = express();
app.use(express.json());

//backend for user side
app.use("/api/v1/user", userRoutes);

//backend for preview courses
app.use("/api/v1/course", courseRoutes);

//backend for admin side 
app.use("/api/v1/admin" , adminRoutes)

app.listen(3000, () => {
  console.log("Server listening on PORT 3000......");
});
