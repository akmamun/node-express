const Todo = require("../models/Todo");

const addTodo = async (req, res) => {
  const { title, body, createdAt } = req.body;

  const todo = new Todo({ title, body, createdAt });

  await todo.save((err) => {
    if (err) {
      res.status(400).json({ message: err.message });
    }
    return res.status(201).json({ message: "Successfuly Added" });
  });
};

const getTodos = async (req, res) => {
  const skip = Number(req.query.skip) || null;
  const limit = Number(req.query.limit) || 200;

  const todos = await Todo.find()
    .sort({ createdAt: 1 })
    .skip(skip)
    .limit(limit);
  return res.status(200).json(todos);
};

module.exports = { getTodos, addTodo };
