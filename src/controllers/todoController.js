const Todo = require("../models/Todo");

async function addTodo(req, res) {
  try {
    const { title, body } = req.body;
    const todo = new Todo({ title, body });
    await todo.save();
    res.status(201).json({ message: "Successfuly Added" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
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
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
  } catch {
    res.status(404).json({ message: "400 Route Not Found" });
  }
}

async function updateTodo(req, res) {
  const id = req.params.id;

  try {
    const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(todo);
  } catch {
    res.status(404).json({ message: "400 Route Not Found" });
  }
}

async function deleteTodo(req, res) {
  try {
    const id = req.params.id;
    await Todo.findByIdAndRemove(id);
    res.status(200).json({ message: "Todo remove succesffuly" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { getTodoList, addTodo, getTodo, updateTodo, deleteTodo };
