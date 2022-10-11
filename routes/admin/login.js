const express = require("express");
var Admin = require("../../Models/Admin");

var router = express.Router();

router.get("/", (req, res) => {
  var name = req.body.name;
  res.render("admin/login", {
    title: "Admin Login",
    greetMsg: "ONLINE EXAM CORNER",
    loginStatus: "true",
  });
});

router.post("/", (req, res) => {
  let userData = {
    username: req.body.name,
    number: req.body.number,
    email: req.body.email,
    password: req.body.password,
  };
  const user = new Admin(userData);
  user
    .save()
    .then((addedUser) => {
      console.log(addedUser);
      res.render("admin/login", {
        title: "login",
        greetMsg: "ONLINE EXAM CORNER",
        loginStatus: "true",
      });
    })
    .catch((e) => {
      console.log("error" + e);
      res.render("admin/registration", {
        title: "login",
        greetMsg: "ONLINE EXAM CORNER",
        emailStatus: "false",
      });
    });
});
module.exports = router;
