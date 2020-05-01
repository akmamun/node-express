const Todo = require("../models/Todo");

async function addTodo(req, res) {
  const { title, body } = req.body;

  const todo = new Todo({ title, body });

  await todo.save((err) => {
    if (err) res.status(400).json({ message: err.message });
    res.status(201).json({ message: "Successfuly Added" });
  });
}

async function getTodoList(req, res) {
  const skip = Number(req.query.skip) || null;
  const limit = Number(req.query.limit) || 200;

  const todos = await Todo.find()
    .sort({ createdAt: 1 })
    .skip(skip)
    .limit(limit);
  res.status(200).json(todos);
}

async function getTodo(req, res) {
  const id = req.params.id;
  await Todo.findById(id, (err, todo) => {
    if (err) res.status(400).json({ message: "400 Not Found" });
    res.status(200).json(todo);
  });
}

async function updateTodo(req, res) {
  const id = req.params.id;
  await Todo.findByIdAndUpdate(id, req.body, { new: true }, (err, todo) => {
    if (err) res.status(400).json({ message: "400 Not Found" });
    res.status(201).json(todo);
  });
}

async function deleteTodo(req, res) {
  const id = req.params.id;
  await Todo.findByIdAndRemove(id, (err) => {
    if (err) res.status(400).json({ message: "400 Not Found" });
    res.status(200).json({ message: "Todo remove succesffuly" });
  });
}

module.exports = { getTodoList, addTodo, getTodo, updateTodo, deleteTodo };
