const express = require("express");
var Admin = require("../../Models/Admin");
var router = express.Router();
router.post("/", (req, res) => {
  userData = {
    email: req.body.email,
    password: req.body.password,
  };
  console.log(userData);
  Admin.findOne(userData)
    .then((msg) => {
      if (!msg) {
        res.render("admin/login", {
          title: "login",
          greetMsg: "ONLINE EXAM CORNER",
          emailStatus: "true",
          loginStatus: "false",
        });
      } else {
        res.render("admin/main", {
          title: "Administrative Panel",
          greetMsg: "ONLINE EXAM CORNER",
          loginStatus: "true",
        });
      }
    })
    .catch((err) => {
      console.log("error" + err);
    });
});

// localhost:3000/main/user
router.get("/user", (req, res) => {
  User.find()
    .then((data) => {
      if (!data) {
        res.send("nothing to show");
      } else {
        res.render("admin/user", {
          user: data,
        });
      }
    })
    .catch((err) => {
      console.log("erro:" + err);
    });
});
// localhost:3000/main/update
router.post("/update", (req, res) => {
  let userid = req.body.id;
  let updatedUsername = req.body.username;
  let updatedEmail = req.body.email;
  let updatedNumber = req.body.number;
  let updatedPassword = req.body.password;
  User.findOne({ _id: userid })
    .then((user) => {
      user.username = updatedUsername;
      user.email = updatedEmail;
      user.number = updatedNumber;
      user.password = updatedPassword;
      return user.save();
    })
    .then((updatedResult) => {
      console.log(updatedResult);
      res.json(updatedResult);
    })
    .catch((e) => {
      console.log(e);
    });
});

//post ---> localhost:3000/main/delete
router.post("/delete", (req, res) => {
  let userid = req.body.id;
  User.findOneAndDelete({ _id: userid })
    .then((result) => {
      console.log(result);
      res.redirect("admin/main/user");
    })
    .catch((e) => {
      console.log(e);
    });
});
module.exports = router;

module.exports = router;
