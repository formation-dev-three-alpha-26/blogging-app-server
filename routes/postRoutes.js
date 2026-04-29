const postrouter = require("express").Router()

const controller = require("../controller/postController")



postrouter.route("/").get(controller.getAll)

postrouter.route("/").post(controller.createPost)

module.exports = postrouter