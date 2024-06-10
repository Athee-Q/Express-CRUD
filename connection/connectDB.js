const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/angulardb");
    console.log("DB connected Successfully !");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = connectDB;
