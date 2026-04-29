const mongoose = require("mongoose");

const postschema = mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  imageUrl: String,
});



const post = mongoose.model("post" , postschema)


module.exports = post
