const mongoose = require("mongoose");

async function database() {
  const dbName = "databaseName";
  const host = process.env.MONGO_HOST || "0.0.0.0";
  const port = process.env.MONGO_PORT || "27017";
  const url = process.env.MONGO_URI || `mongodb://${host}:${port}/${dbName}`;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };

  await mongoose.connect(url, options);
  const db = mongoose.connection;
  db.on("error", (error) => console.log(error));
  db.once("open", () => console.log(`Database connected to ${host}:${port}`));
}
module.exports = database;
