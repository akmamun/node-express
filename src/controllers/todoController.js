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

const getTodoList = async (req, res) => {
  const skip = Number(req.query.skip) || null;
  const limit = Number(req.query.limit) || 200;

  const todos = await Todo.find()
    .sort({ createdAt: 1 })
    .skip(skip)
    .limit(limit);
  return res.status(200).json(todos);
};

const getTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json({ message: "Not FOund" });
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  await todo.findByIdAndUpdate(id, (err) => {
    if (err) {
      res.status(400).json({ message: err.message });
    }
    return res.status(200).json(todo);
  });
  // const todo = await Todo.findByIdAndUpdate(id);
  // return res.status(200).json(todo);
};
module.exports = { getTodoList, addTodo, getTodo };
