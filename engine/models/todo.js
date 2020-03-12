const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  body: String,
  //   comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now }
});
todoSchema.index({ date: -1 });
