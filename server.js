const express = require("express");
const postrouter = require("./routes/postRoutes")
const userrouter = require("./routes/userRoutes")
const cors = require("cors")
require("./db/config")
const limit = require("./middleware/limitermiddlware")
const server = express();


server.use(cors())
server.use(express.json());
server.use(limit)
server.use("/api/posts" , postrouter)
server.use("/api/user" , userrouter)





server.listen(3000, () => {
  console.log(`server is running on localhost:3000`);
});
