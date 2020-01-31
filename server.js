//external npm packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
const databaseName = "Fitness-Tracker_db";

//assign port
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


//access database
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/" + databaseName,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  .then(() => console.log(`successfully connected to database: ${databaseName}`));

const routes = require("./routes");
app.use(routes)

//listen to port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});