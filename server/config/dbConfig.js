const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectDB = (mongo_uri) => {
  return mongoose.connect(
    mongo_uri,
    console.log("~Connected to Mongodb Atlas Successfully..")
  );
};

module.exports = connectDB;
