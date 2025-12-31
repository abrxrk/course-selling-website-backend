import mongoose, { Schema } from "mongoose";
const objectId = mongoose.Types.ObjectId;
const CourseSchema = new Schema({
  title: String,
  description: String,
  imageUrl: String,
  price: Number,
  adminId: { type: objectId, ref: "Admin" },
});

export const Courses = mongoose.model("Courses", CourseSchema);
