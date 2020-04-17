const express = require("express");
const router = express.Router();

const todoRouter = require("./todo");

router.get("/", async (req, res) => {
  res.send({ message: "API home page" });
});

//bind routes

router.use("/", todoRouter);

module.exports = router;
