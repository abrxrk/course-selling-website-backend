import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("db connected successfully")
  } catch (err) {
    console.log("error connecting to db", err);
  }
};
