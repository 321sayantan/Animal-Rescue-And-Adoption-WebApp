const mongoose = require("mongoose");
const env = require("dotenv");

env.config();

async function dbconnect(){
mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log("Database connection failed");
    console.log(err);
  });
}

module.exports = dbconnect;
