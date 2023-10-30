const mongoose = require("mongoose");

const serviceCategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  // Other category-related fields
});

const ServiceCategory = mongoose.model(
  "ServiceCategory",
  serviceCategorySchema
);

module.exports = ServiceCategory;
