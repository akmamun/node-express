const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

// router.get("/todos", controller.getTodoList);
router.post("/signup", controller.signUp);

module.exports = router;
