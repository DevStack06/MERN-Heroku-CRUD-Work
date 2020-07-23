const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    department: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
);
module.exports = mongoose.model("User", User);
