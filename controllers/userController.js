import bcrypt from "bcrypt";
import { User } from "../models/UserSchema.js";
import jwt from "jsonwebtoken";

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
    await User.create({
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
    const user = await User.findOne({
      email,
    });
    if (!user) {
      res.json({
        message: "user not found..",
      });
      return
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
        userId: user._id,
      },
      process.env.JWT_USER_PASSWORD,
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
export const myCourse = async () => {};
