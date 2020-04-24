const express = require("express");
const router = express.Router();

const controller = require("../controllers/todoController");

router.get("/todos", controller.getTodoList);
router.post("/todos", controller.addTodo);
router.get("/todos/:id", controller.getTodo);
router.patch("/todos/:id", controller.updateTodo);
router.delete("/todos/:id", controller.deleteTodo);

module.exports = router;
