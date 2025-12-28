import mongoose, { Schema } from "mongoose";

const ObjectId = mongoose.Types.ObjectId;
const PurchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId,
});

export const Purchases = mongoose.model("Purchases", PurchaseSchema);
