const express = require("express");
const Form = require("../models/form.model");
const router = express.Router();

router.route("/Add/:username").post((req, res) => {
  console.log("you hit the register");
  const form = new Form({
    username: req.params.username,
    department: req.body.department,
    msg: req.body.msg,
    respectiveUsername: req.body.respectiveUsername,
  });
  form
    .save()
    .then(() => {
      return res.json({ msg: "Form Added succussfully", data: form });
    })
    .catch((err) => {
      return res.status(400).json({ Error: err });
    });
});

module.exports = router;
