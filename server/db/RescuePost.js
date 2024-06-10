const mongoose = require("mongoose");

const RescuePostSchema = new mongoose.Schema({
    rescuer_name: {
        type: String,
    },
    rescuer_phone: {
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
    image: {
        type: String,
    },
    image_id: {
        type: String,
    },
    vet_gender: {
        type: String,
    },
    description: {
        type: String,
    },
    vet_health_status: {
        type: Array,
    },
});

module.exports = mongoose.model("RescuePost", RescuePostSchema);