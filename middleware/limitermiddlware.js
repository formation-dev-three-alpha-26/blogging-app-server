const rateLimit = require("express-rate-limit");

const limitparip = rateLimit({
  windowMs: 5 * 60 * 1000,
  limit : 2,
  message: "Too Many Requests",
});



module.exports = limitparip