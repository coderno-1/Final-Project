const mongoose = require("mongoose");
const config = require("config");

const dbgr = require('debug')("development: mongoose");

mongoose
  .connect(`${config.get("MONGODB_URI")}/Final-Project`)
  .then(() => {
    dbgr("database connected.");
  })
  .catch((err) => {
    dbgr(err);
  });

mongoose.exports = mongoose.connection;
