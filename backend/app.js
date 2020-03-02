const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const models = require("./models");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const axios = require("axios");
const tasksRouter = require("./routes/tasks");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/tasks", tasksRouter);


// TESTING API FOR GOOGLE BOOKS
// /volumes?q={search terms}
const baseURL = "https://www.googleapis.com/books/v1";
axios
  .get(`${baseURL}/volumes?q=harry%20potter&${process.env.API_KEY}`)
  .then(res => {
    console.log(res.data)
  })




models.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT)
  })
});

// app.get("/search/:book", (req, res) => {
//   const book = req.params.book;
//   axios
//     .get(`${baseURL}/volumes?q=${book}&${process.env.API_KEY}`)
//     .then(res => {
//       console.log(res.data)
//     })
// })

module.exports = app;

