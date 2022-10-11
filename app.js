const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const firstRoute = require("./routes/first");
const sec1Route = require("./routes/admin/firstpage");
const loginRoute = require("./routes/admin/login");
const sec2Route = require("./routes/admin/registration");

const sec4Route = require("./routes/admin/main");
const sec5Route = require("./routes/question/addquestion");
const sec7route = require("./routes/question/viewquestion");
const userlogRoute = require("./routes/user/userlog");
const usernameRoute = require("./routes/user/username");
const usersumbitRoute = require("./routes/user/usersumbit");
const studentregistrationRoute = require("./routes/user/studentregistration");

const server = app.listen(3000, "localhost", () => {
  console.log("server connected");
});
mongoose
  .connect("mongodb://localhost:27017/StudentExamCorner", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("error" + err);
  });

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", firstRoute);
app.use("/firstpage", sec1Route);
app.use("/login", loginRoute);
app.use("/registration", sec2Route);
app.use("/main", sec4Route);

app.use("/addquestion", sec5Route);
app.use("/viewquestion", sec7route);
app.use("/userlog", userlogRoute);
app.use("/username", usernameRoute);
app.use("/usersumbit", usersumbitRoute);
app.use("/studentregistration", studentregistrationRoute);
