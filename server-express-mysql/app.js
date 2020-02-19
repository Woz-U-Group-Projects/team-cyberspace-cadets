var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var models = require("./models");
var cors = require("cors");
const PORT = process.env.PORT || 3000;

var tasksRouter = require("./routes/tasks");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/tasks", tasksRouter);

models.sequelize.sync().then(function() {
  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT )
  })
});

module.exports = app;

