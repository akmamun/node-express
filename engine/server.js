// const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();
const db = require("./config/db");
db();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/index");
const todoRouter = require("./routes/todo");

app.use("/", indexRouter);
app.use("/todo", todoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res
    .status(404) // HTTP status 404: NotFound
    .send({ message: "404 Route Not found" });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
