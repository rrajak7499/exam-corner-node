const express = require("express");
const Admin = require("../../Models/Admin");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("admin/registration", {
    title: "registration",
    greetMsg: "ONLINE EXAM CORNER",
    emailStatus: "true",
  });
});
module.exports = router;
