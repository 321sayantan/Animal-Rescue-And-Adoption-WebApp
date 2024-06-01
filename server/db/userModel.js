const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  zip_code: {
    type: String,
  },
  image: {
    type: String,
  }  
});

module.exports = mongoose.model("Users", userSchema);