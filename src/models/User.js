const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

function setPassword(value) {
  return bcrypt.hashSync(value, 10);
}

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required!"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
      minlength: [8, "Use 8 characters or more for your password"],
    },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const model = mongoose.model("User", UserSchema);
module.exports = model;
