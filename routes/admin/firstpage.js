const express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("admin/firstpage", {
    title: "Exam Corner",
    greetMsg: "Online Exam System",
  });
});
module.exports = router;
