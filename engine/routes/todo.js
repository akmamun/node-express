const express = require("express");
const router = express.Router();

const controller = require("../controllers/todoController");

router.post("/todo", controller.addTodo);

module.exports = router;
