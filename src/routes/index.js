const express = require("express");
const router = express.Router();

const todoRouter = require("./todo");
const userRouter = require("./user");


router.get("/", async (req, res) => {
  res.send({ message: "API home page" });
});

//bind routes

router.use("/", todoRouter);
router.use("/", userRouter);


module.exports = router;
