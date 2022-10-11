const express = require("express");
const Question = require("../../Models/Question");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("question/addquestion", {
    title: "Add Questions",
    greetMsg: "ADD QUESTION",
    addStatus: "true",
  });
});

module.exports = router;
