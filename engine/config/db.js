const mongoose = require("mongoose");

const dbName = "database_name";
const host = process.env.MONGO_HOST || "0.0.0.0";
const port = process.env.MONGO_PORT || "27170";
const url = process.env.MONGO_URI || `mongodb://${host}:${port}/${dbName}`;

const options = {
  user: "username",
  pass: "password",
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};

mongoose.connect(url, options).catch(err => console.log(err.reason));
console.log("Establish new connection with url", url);
