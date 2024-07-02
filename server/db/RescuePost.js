const mongoose = require("mongoose");

const RescuePostSchema = new mongoose.Schema({
  rescuer_name: {
    type: String,
  },
  rescuer_phone: {
    type: String,
  },
  rescuer_email: {
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
  vet_category: {
    type: String,
  },
  images: [
    {
      image: String,
      image_id: String,
    },
  ],
  vet_gender: {
    type: String,
  },
  description: {
    type: String,
  },
  vet_health_status: {
    type: Array,
  },
  rescued: {
    type: Boolean,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("RescuePost", RescuePostSchema);
