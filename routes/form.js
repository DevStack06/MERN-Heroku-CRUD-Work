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

router.route("/pending/:username").get((req, res) => {
  Form.find(
    { $and: [{ username: req.params.username }, { status: "Pending" }] },

    (err, formdata) => {
      if (err) return res.json({ Error: err });
      else if (formdata == null) {
        return res.json({
          data: [],
        });
      } else return res.json({ data: formdata });
    }
  );
});

router.route("/penApprovel/:username").get((req, res) => {
  Form.find(
    {
      $and: [
        { respectiveUsername: req.params.username },
        { status: "Pending" },
      ],
    },

    (err, formdata) => {
      if (err) return res.json({ Error: err });
      else if (formdata == null) {
        return res.json({
          data: [],
        });
      } else return res.json({ data: formdata });
    }
  );
});

router.route("/approved/:username").get((req, res) => {
  Form.find(
    { $and: [{ username: req.params.username }, { status: "Approved" }] },

    (err, formdata) => {
      if (err) return res.json({ Error: err });
      else if (formdata == null) {
        return res.json({
          data: [],
        });
      } else return res.json({ data: formdata });
    }
  );
});

router.route("/rejected/:username").get((req, res) => {
  Form.find(
    { $and: [{ username: req.params.username }, { status: "Rejected" }] },

    (err, formdata) => {
      if (err) return res.json({ Error: err });
      else if (formdata == null) {
        return res.json({
          data: [],
        });
      } else return res.json({ data: formdata });
    }
  );
});

router.route("/changeStatus").patch((req, res) => {
  Form.findOneAndUpdate(
    { _id: req.body._id },

    { $set: { status: req.body.status } },
    (err, result) => {
      if (err) return res.status(500).json({ msg: err });
      const msg = {
        msg: "status successfully updated",
        data: result,
      };
      console.log(req.params.username);
      console.log(msg);
      return res.json(msg);
    }
  );
});
module.exports = router;
