const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

router.route("/login").post((req, res) => {
  console.log("you hit the login");
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) return res.json({ Error: err });
    if (user == null) {
      return res.status(403).json({
        success: false,
        msg: "Incorrect username or password",
      });
    } else {
      if (user.password == req.body.password) {
        return res.json({
          success: true,
          data: user,
          msg: "Authentication successful!",
        });
      } else {
        return res.status(403).json({
          success: false,
          msg: "Incorrect password",
        });
      }
    }
  });
});

router.route("/register").post((req, res) => {
  console.log("you hit the register");
  const user = new User({
    username: req.body.username,
    department: req.body.department,
    password: req.body.password,
  });
  user
    .save()
    .then(() => {
      return res.json({ msg: "Registered succussfully", data: user });
    })
    .catch((err) => {
      return res.status(400).json({ Error: err });
    });
});

router.route("/getData/:department").get((req, res) => {
  User.find(
    { department: { $ne: req.params.department } },
    "username department",
    (err, user) => {
      if (err) return res.json({ Error: err });
      else if (user == null) {
        return res.json({
          data: [],
        });
      } else return res.json({ data: user });
    }
  );
});

module.exports = router;
