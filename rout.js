const express = require("express");
const routes = express.Router();
const controller = require("./controler");
// GET ALL
routes.get("/Courses", controller.GetAllCourses);
// GET ONE
routes.get("/Courses/:id", controller.GetOneCourse);

// POST
routes.post("/Courses", controller.PostOneCourse);

// DELETE
routes.delete("/Courses/:id", controller.DeleteOneCourse);

// PATCH
routes.patch("/Courses/:id", controller.UpdateOneCourse);

// routes.get("/Course/:id", controller.GetOneCourse);
// routes.get("/Course/:id", controller.GetOneCourse);
// routes.get("/Course/:id", controller.GetOneCourse);
// routes.get("/Course/:id", controller.GetOneCourse);
// routes.get("/Course/:id", controller.GetOneCourse);
// routes.get("/Course/:id", controller.GetOneCourse);
// routes.get("/Course/:id", controller.GetOneCourse);

module.exports = routes;
