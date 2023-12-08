const mongoose = require("mongoose");
const slug = require("slugify");

const serviceProviderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Service Provider must be a user"],
  },
  service: {
    type: String,
    required: [true, "Service is required"],
  },
  serviceCategory: String,
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  price: {
    type: Number,
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
    maxlength: 500,
  },
  availability: Array, // E.g., ["Monday", "Tuesday"]
  slug: String,
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
  this.slug = slugify(this.service, { lower: true });
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
