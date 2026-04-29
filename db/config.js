const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/blogapp")
  .then(() => console.log("db connected lel server"))
  .catch((error) => console.log(error));
