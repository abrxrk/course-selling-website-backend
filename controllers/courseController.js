import { Courses } from "../models/CourseSchema";
import { Purchases } from "../models/PurchaseSchema";

export const previewCourses = async (req, res) => {
  try {
    //fetches all the courses from db
    const courses = await Courses.find({});
    res.json({
      courses,
    });
  } catch (error) {
    res.json({
      message: "error fetching courses",
    });
    console.log("error displaying courses", error);
  }
};
export const purchaseCourse = async (req, res) => {
  const userId = req.user.userId;
  const courseId = req.body.courseId;
  if (!courseId || !userId) {
    res.json({
      message: "details missing",
    });
    return;
  }
  try {
    const courseVerification = await Courses.findById(courseId);
    if (!courseVerification) {
      return  res.json({
        message: "course does not exist",
      });
    }
    await Purchases.create({
      userId: userId,
      courseId: courseId,
    });
    res.json({
      message: "course purchased successfully",
    });
  } catch (error) {
    res.json({
      message: "error purchasing ticket",
    });
    console.log("error purchasing ticket", error);
  }
};
