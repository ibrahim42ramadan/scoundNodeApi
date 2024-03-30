const express = require("express");
const mongoose = require("mongoose");
const CoursesRoute = require("./rout");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => console.log("  congrat Connected to MongoDB server "))
  .catch((error) =>
    console.error(" bad nwes Error connecting to MongoDB:", error)
  );
app.use("/api", CoursesRoute);

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
