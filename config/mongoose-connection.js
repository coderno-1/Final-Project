const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Final-Project")
  .then(() => {
    console.log("MongoDB connected.");
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.exports = mongoose.connection;
