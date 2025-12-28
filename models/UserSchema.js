import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  username: String,
  email: {type: String , unique: true},
  password: String,
});

export const User = mongoose.model("User", UserSchema);
