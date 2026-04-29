const express = require("express");
const postrouter = require("./routes/postRoutes")
require("./db/config")
const server = express();



server.use(express.json());




server.use("/api/posts" , postrouter)

server.listen(3000, () => {
  console.log(`server is running on localhost:3000`);
});
