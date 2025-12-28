import mongoose, { Schema } from "mongoose";
const objectId = mongoose.Types.ObjectId;
const CourseSchema = new Schema({
  title: String,
  description: String,
  imageUrl: String,
  price: Number,
  adminId: objectId,
});

export const Courses = mongoose.model("Courses", CourseSchema);
