const express = require("express");
const router = express.Router();
const User = require("../models/User");
const signUpTemplateCopy = require("../models/SignUpModals");

const controller = require("../models/LoginModals");

router.post("/signup", (request, response) => {
  console.log(request.body);
  User.findOne({
    $or: [{ email: request.body.email }, { username: request.body.username }],
  }).exec((err, user) => {
    if (err) {
      response.status(500).send({ message: err });
      return;
    }
    if (user) {
      return response.status(409).send("this user or email already existed!");
    } else {
      return registerHandler(request, response);
    }
  });
  function registerHandler(request, response) {
    console.log("Reg handler running");
    const signUpUser = new signUpTemplateCopy({
      email: request.body.email,
      username: request.body.username,
      password: request.body.password,
      question: request.body.question,
      answer: request.body.answer,
    });

    signUpUser
      .save()
      .then((data) => {
        console.log("data:", data);
        response.json(data);
      })
      .catch((err) => {
        console.log("Error: ", err);
        response.json(err);
      });
  }
});

router.post("/login", controller.signin);

router.post("/forgotpwd", async (req, res) => {
  console.log("inside router: ", req.body);
  const filter = {
    email: req.body.email,
    question: req.body.question,
    answer: req.body.answer,
  };
  const update = { password: req.body.password };
  const opts = { new: true };

  try {
    User.findOneAndUpdate(filter, update, opts, (a, b, c) => {
      if (!b) return res.status(400).send("Invalid information");
      if (b.password === req.body.password) {
        res.status(200).send("password successfully changed");
        return;
      }
    });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send(error);
  }
});
module.exports = router;
