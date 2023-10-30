const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  duration: String,
  serviceProvider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceProvider",
    required: true,
  },
  // Other service-related fields
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
