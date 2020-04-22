const mongoose = require("mongoose");
const schema = mongoose.Schema;

const todoSchema = new schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
  // { collection: "todos" }
);

const todoModel = mongoose.model("Todo", todoSchema);
module.exports = todoModel;
