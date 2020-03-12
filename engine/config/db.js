function db() {
  const mongoose = require("mongoose");

  const dbName = "databaseName";
  const host = process.env.MONGO_HOST || "0.0.0.0";
  const port = process.env.MONGO_PORT || "27017";
  const url = process.env.MONGO_URI || `mongodb://${host}:${port}/${dbName}`;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  };
  mongoose
    .connect(url, options)
    .then(console.log(`Database connected to ${host}:${port}`))
    .catch(err => console.log(err.reason));
}
module.exports = db;
