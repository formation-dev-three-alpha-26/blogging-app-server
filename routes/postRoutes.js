const postrouter = require("express").Router()

const controller = require("../controller/postController")



postrouter.route("/").get(controller.getAll)

postrouter.route("/:userId").get(controller.getpostsparUser)



postrouter.route("/").post(controller.createPost)

postrouter.route("/:id").put(controller.updatePost)

postrouter.route("/:id").delete(controller.deletePost)

postrouter.route("/:id").get(controller.onePost)


module.exports = postrouter