import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Admin } from "../models/AdminSchema.js";
import { Courses } from "../models/CourseSchema.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.json({
      message: "please enter all the required details..Missing...",
    });
    return;
  }
  const encodedPassword = await bcrypt.hash(password, 10);
  try {
    await Admin.create({
      username,
      password: encodedPassword,
      email,
    });
    res.json({
      message: "you have successfully signed up...",
    });
  } catch (error) {
    res.json({
      message: "signup failed",
    });
    console.log("error signing up", error);
    return;
  }
};
export const login = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.json({
      message: "please enter all the required details..Missing...",
    });
    return;
  }
  try {
    const user = await Admin.findOne({
      email,
    });
    if (!user) {
      res.json({
        message: "user not found..",
      });
      return;
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      res.json({
        message: "invalid credentials",
      });
      return;
    }
    const token = jwt.sign(
      {
        adminId: user._id,
      },
      process.env.JWT_ADMIN_PASSWORD,
    );

    res.json({
      token: token,
    });
  } catch (error) {
    res.json({
      message: "login failed",
    });
    console.log("error signing in", error);
    return;
  }
};
export const addCourse = async (req, res) => {
  const { title, description, imageUrl, price } = req.body;
  const adminId = req.user.adminId;
  if (!title || !description || !imageUrl || !price || !adminId) {
    res.json({ message: "course creation credentials missing" });
    return;
  }
  const adminFound = await Admin.findById({
    _id: adminId,
  });
  if (!adminFound) {
    res.json({
      message: "admin not found",
    });
    return;
  }
  try {
    await Courses.create({
      title,
      description,
      imageUrl,
      price,
      adminId,
    });
    res.json({
      message: "course created successfully",
    });
  } catch (error) {
    res.json({
      message: "error creating a course",
    });
    console.log("error creating a course", error);
  }
};
export const updateCourse = async (req, res) => {
  const { title, description, imageUrl, price, courseId } = req.body;
  const adminId = req.user.adminId;
  const courseVerify = await Courses.findOne({
    _id: courseId,
    adminId: adminId,
  });
  if (!courseVerify) {
    return res.json({ message: "this course doesnt belong to this admin" });
  }
  try {
    await Courses.findByIdAndUpdate(courseId, {
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
    });
    res.json({ message: "successfully updated course" });
  } catch (err) {
    res.json({ message: "error updating course" });
    console.log("error updating course", err);
  }
};
export const removeCourse = async (req, res) => {
  const { courseId } = req.body;
  const adminId = req.user.adminId;
  const courseVerify = await Courses.findOne({
    _id: courseId,
    adminId: adminId,
  });
  if (!courseVerify) {
    return res.json({ message: "this course doesnt belong to this admin" });
  }
  try {
    await Courses.findByIdAndDelete(courseId);
    res.json({ message: "successfully updated course" });
  } catch (err) {
    res.json({ message: "error deleting course" });
    console.log("error deleting course", err);
  }
};
