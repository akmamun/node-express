const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
  // { collection: "todos" }
);

const model = mongoose.model("Todo", todoSchema);
module.exports = model;
