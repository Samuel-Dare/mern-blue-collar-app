const mongoose = require("mongoose");
const fs = require("fs");
const slugify = require("slugify");

const servicesJson = fs.readFileSync(
  `${__dirname}/../public/config/availableServices.json`,
  "utf-8"
);
const locationsJson = fs.readFileSync(
  `${__dirname}/../public/config/availableLocations.json`,
  "utf-8"
);
const availableServices = JSON.parse(servicesJson);
const availableLocations = JSON.parse(locationsJson);

const serviceProviderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Service Provider must have a userId"],
  },
  services: {
    type: [String],
    enum: availableServices,
    required: [true, "At least one service is required"],
    validate: {
      validator: function (arr) {
        return arr.length > 0 && arr.length <= 3; // Change 5 to your desired maximum number of services
      },
      message: "You must choose at least one service and at most 3 services",
    },
  },
  location: {
    type: String,
    enum: availableLocations,
    required: [true, "Service Provider must have a location"],
  },
  price: {
    type: Array,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must be 1.0 and above"],
    max: [5, "Rating must be 5.0 and below"],
    set: (val) => Math.round(val * 10) / 10,
  },
  about: {
    type: String,
    maxlength: [500, "About cannot exceed 500 characters"],
  },
  availability: Array, // E.g., ["Monday", "Tuesday"]
  slug: Number,
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

serviceProviderSchema.index({ slug: 1 });
serviceProviderSchema.index({
  service: 1,
  price: 1,
  ratingsAverage: -1,
  ratingsQuantity: -1,
});

serviceProviderSchema.pre("save", function (next) {
  // Convert ObjectId to string
  const userIdString = this.user.toString();
  // Generate slug from the user ID
  this.slug = slugify(userIdString, { lower: true });
  next();
});

serviceProviderSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "-__v -password",
  });
  next();
});

serviceProviderSchema.pre(/^find/, function (next) {
  this.collation({ locale: "en", strength: 2 });
  next();
});

const ServiceProvider = mongoose.model(
  "ServiceProvider",
  serviceProviderSchema
);

module.exports = ServiceProvider;
