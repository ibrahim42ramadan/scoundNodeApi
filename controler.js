const Course = require("./model");
// get all
const GetAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};
// get one course

const GetOneCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json(course);
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};
//  post one course
const PostOneCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    console.log(req.body);
    res.status(200).json(course);
  } catch (err) {
    console.log(req.body);

    res.json({
      msg: err.message,
    });
  }
};
// deleat course

const DeleteOneCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    res.status(200).json([
      {
        msg: "course deleted successfully",
      },
      { course },
    ]);
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};
// UPDATE

const UpdateOneCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(course);
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};
module.exports = {
  GetAllCourses,
  GetOneCourse,
  PostOneCourse,
  DeleteOneCourse,
  UpdateOneCourse,
};
