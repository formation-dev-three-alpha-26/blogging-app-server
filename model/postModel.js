const mongoose = require("mongoose");

const postschema = mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  imageUrl: String,
  author : {
    type : mongoose.Schema.Types.ObjectId ,
    ref : "user"

  } 
});



const post = mongoose.model("post" , postschema)


module.exports = post



