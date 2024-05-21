const mongoose = require("mongoose");

async function dbconnect(){
mongoose
  .connect(
    "mongodb+srv://Sayantan:mongosayantan@cluster0.ugzrshy.mongodb.net/AdoPet?retryWrites=true&w=majority&appName=Cluster0"
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
