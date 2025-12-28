import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
});

export const Admin = mongoose.model("Admin", AdminSchema);
