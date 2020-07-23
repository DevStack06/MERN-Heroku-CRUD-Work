const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Form = Schema({
  username: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  respectiveUsername: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Pending",
  },
});
module.exports = mongoose.model("Form", Form);
