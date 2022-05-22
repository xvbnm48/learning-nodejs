// set up connection to mongodb

const mongoose = require("mongoose");

const mongoDB = "mongodb://localhost/Firts_App";

mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

module.exports = mongoose;
