const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["Point"],
      // required: true,
    },
    coordinates: {
      type: [Number], // Array of Numbers
      // required: true,
      validate: {
        validator: function (arr) {
          return arr.length === 2; // Must be an array of 2 numbers (latitude, longitude)
        },
        message: "Coordinates must contain exactly 2 elements.",
      },
    },
  },
  { _id: false }
);

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
  loc: {
    type: LocationSchema,
    // required: true
  },
  zip_code: {
    type: Number,
  },
  image: {
    type: String,
  },
  imageID: {
    type: String,
  },
  is_volunteer: {
    type: Boolean,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

userSchema.index({ loc: "2dsphere" });

module.exports = mongoose.model("Users", userSchema);
