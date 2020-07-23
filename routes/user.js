const express = require("express");
const User = require("../model/user.model");
let config = require("../config");
const router = express.Router();


router.route("/login").post(async (req, res) => {
  console.log("you hit the login");
  await User.findOne(
    { username: req.body.username },
    (err, user) => {
    if(err) return res.json({Error:err});
      if (user == null) {
       return  res.status(403).json({
          success: false,
          msg: "Incorrect username or password",
        });
      } else {
        if (user.password == req.body.password) {
          
          return res.json({
            success: true,
            data:user,
            msg: "Authentication successful!",
          });
        } else {
          return res.status(403).json({
            success: false,
            msg: "Incorrect password",
          });
        }
      }
    }
  );
});

router.route("/register").post(async (req, res) => {
  console.log("you hit the register");
  const user = new User({
    username: req.body.username,
    department: req.body.department,
    password: req.body.password,
  });
  await user
    .save()
    .then(() => {
      return res.json(user);
    })
    .catch((err) => {
      return res.status(400).json({ Error: err });
    });
});

router.route("/getDepartment/:dapartment").get((req,res)=>{
  await User.find(
    {},
    (err, user) => {
    if(err) return res.json({Error:err});
    else if (user == null) {
      return  res.json({
         data: [],
         
       });
     } 
     else return res.json({data:user});
    }
  );
})

module.exports = router;
