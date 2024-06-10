const express = require("express");
const cors = require("cors");
const connectDB = require("./connection/connectDB");
require('dotenv').config();
const routes = require('./routes/routes');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(express.json());

app.use(cors());``


app.get("/", (req, res) => {
  res.status(201).json("Home get request");
});

app.use("/api", routes);



connectDB()
.then(() => {
  try {
    app.listen(port, () => {
      console.log(`Server run on port HTTP://localhost:${port}`);
    });
  } catch (error) {
    console.log("Cannot connected to the server");
  }
})
.catch((error) => {
  console.log("Invalid database connection...!");
});

