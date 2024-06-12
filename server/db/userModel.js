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
  address: {
    type: String,
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
  zip_code: {
    type: Number,
  },
  image: {
    type: String,
  },
  is_volunteer: {
    type: Boolean,
  }
});

module.exports = mongoose.model("Users", userSchema);