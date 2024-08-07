const mongoose = require("mongoose");

const AdoptPostSchema = new mongoose.Schema({
  donor_name: {
    type: String,
  },
  donor_phone: {
    type: String,
  },
  donor_email: {
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
    type: String,
  },
  vet_name: {
    type: String,
  },
  vet_category: {
    type: String,
  },
  vet_breed: {
    type: String,
  },
  image: {
    type: String,
  },
  image_id: {
    type: String,
  },
  is_vaccinated: {
    type: String,
  },
  vet_description: {
    type: String,
  },
  adopted: {
    type: Boolean,
  },
  restrict: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("AdoptPost", AdoptPostSchema);
