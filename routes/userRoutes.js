const userrouter = require("express").Router()

const {createAccount} = require("../controller/userController")



userrouter.route("/create").post(createAccount)


module.exports = userrouter