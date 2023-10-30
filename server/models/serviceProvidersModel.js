const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  serviceCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceCategory",
    required: true,
  },
  description: String,
  availability: [String], // E.g., ["Monday", "Tuesday"]
  // Other service provider-related fields
});

const ServiceProvider = mongoose.model(
  "ServiceProvider",
  serviceProviderSchema
);

module.exports = ServiceProvider;
