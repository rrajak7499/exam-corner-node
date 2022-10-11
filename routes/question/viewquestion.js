const express = require("express");
var Question = require("../../Models/Question");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("question/viewquestion", {
    title: "Review Question",
    greetMsg: "Review Question",
  });
});

router.post("/", (req, res) => {
  let questionData = {
    question: req.body.question,
    a: req.body.a,
    b: req.body.b,
    c: req.body.c,
    d: req.body.d,
    ans: req.body.ans,
  };
  const question = new Question(questionData);
  question
    .save()
    .then((addedQuestion) => {
      console.log(addedQuestion);
      res.render("question/viewquestion", {
        title: "Review Question",
        qes: addedQuestion,
        greetMsg: "Review Question",
      });
    })
    .catch((e) => {
      console.log("error" + e);
      res.render("question/addquestion", {
        title: "add question",

        greetMsg: "ADD QUESTION",
        addStatus: "false",
      });
    });
});

// localhost:3000/viewquestion/qes
router.get("/qes", (req, res) => {
  Question.find()
    .then((data) => {
      if (!data) {
        res.send("nothing to show");
      } else {
        res.render("question/qes", {
          qes: data,
        });
      }
    })
    .catch((err) => {
      console.log("erro:" + err);
    });
});

// localhost:3000/viewquestion/update
router.post("/update", (req, res) => {
  let qesid = req.body.id;
  let updatedQuestion = req.body.question;
  let updatedA = req.body.a;
  let updatedB = req.body.b;
  let updatedC = req.body.c;
  let updatedD = req.body.d;
  let updatedAns = req.body.ans;
  Question.findOne({ _id: qesid })
    .then((qes) => {
      qes.question = updatedQuestion;
      qes.a = updatedA;
      qes.b = updatedB;
      qes.c = updatedC;
      qes.d = updatedD;
      qes.ans = updatedAns;
      return qes.save();
    })
    .then((updatedResult) => {
      console.log(updatedResult);
      res.json(updatedResult);
    })
    .catch((e) => {
      console.log(e);
    });
});

//post ---> localhost:3000/viewquestion/delete
router.post("/delete", (req, res) => {
  let qesid = req.body.id;
  Question.findOneAndDelete({ _id: qesid })
    .then((result) => {
      console.log(result);
      res.redirect("/viewquestion/qes");
    })
    .catch((e) => {
      console.log(e);
    });
});
module.exports = router;
