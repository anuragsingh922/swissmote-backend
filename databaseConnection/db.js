const mongoose = require("mongoose");
const { database_uri } = require("../config");
const connectToDatabase = async () => {
  try {
    mongoose
      .connect(database_uri)
      .then(() => console.log("Connection Successful!"))
      .catch((err) => {
        console.log("MongoDB Connection Not Established.", err);
      });
  } catch (err) {
    console.log("MongoDB Connection Not Established.", err);
  }
};

module.exports = { connectToDatabase };
