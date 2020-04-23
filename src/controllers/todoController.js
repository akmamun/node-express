const Todo = require("../models/Todo");

const addTodo = async (req, res) => {
  const { title, body, createdAt } = req.body;

  const todo = new Todo({ title, body, createdAt });

  await todo.save((err) => {
    if (err) res.status(400).json({ message: err.message });
    res.status(201).json({ message: "Successfuly Added" });
  });
};

const getTodoList = async (req, res) => {
  const skip = Number(req.query.skip) || null;
  const limit = Number(req.query.limit) || 200;

  const todos = await Todo.find()
    .sort({ createdAt: 1 })
    .skip(skip)
    .limit(limit);
  res.status(200).json(todos);
};

const getTodo = async (req, res) => {
  const id = req.params.id;
  await Todo.findById(id, (err, todo) => {
    if (err) res.status(400).json({ message: "400 Not Found" });
    res.status(200).json(todo);
  });
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  await Todo.findByIdAndUpdate(id, req.body, { new: true }, (err, todo) => {
    if (err) res.status(400).json({ message: "400 Not Found" });
    res.status(201).json(todo);
  });
};

module.exports = { getTodoList, addTodo, getTodo, updateTodo };
