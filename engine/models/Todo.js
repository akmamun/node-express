const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: String, // String is shorthand for {type: String}
    body: String,
    //   comments: [{ body: String, date: Date }],
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const todoModel = mongoose.model("Todo", todoSchema);
module.exports = todoModel;
