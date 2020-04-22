const express = require("express");
const router = express.Router();

const controller = require("../controllers/todoController");

router.get("/todos", controller.getTodoList);
router.post("/todos", controller.addTodo);
router.get("/todos/:id", controller.getTodo);


module.exports = router;
