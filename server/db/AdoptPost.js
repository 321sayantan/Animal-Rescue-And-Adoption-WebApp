const mongoose = require("mongoose");

const AdoptPostSchema = new mongoose.Schema({
  donor_name: {
    type: String,
  },
  donor_phone: {
    type: String,
  },
  donor_address: {
    type: String,
  },
  donor_latitude: {
    type: Number,
  },
  donor_longitude: {
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
});

module.exports = mongoose.model("AdoptPost", AdoptPostSchema);
