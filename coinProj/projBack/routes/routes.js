const express = require("express");
const router = express.Router();
const User = require("../models/User");
const signUpTemplateCopy = require("../models/SignUpModals");

const controller = require("../models/LoginModals");

router.post("/signup", (request, response) => {
  User.find({
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
    const signUpUser = new signUpTemplateCopy({
      email: request.body.email,
      username: request.body.username,
      password: request.body.password,
    });

    signUpUser
      .save()
      .then((data) => {
        response.json(data);
      })
      .catch((err) => {
        response.json(err);
      });
    return response
      .status(200)
      .send({ message: "the account has successfully created" });
  }
});

router.post("/login", controller.signin);
module.exports = router;
