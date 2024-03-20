const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  serviceProvider: {
    type: mongoose.Schema.ObjectId,
    ref: "ServiceProvider",
    required: [true, "Booking must belong to a service provider"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Booking must belong to a user"],
  },
  bookingDetails: {
    type: Object,
    require: [true, "Booking must have details"],
  },
  price: {
    type: Number,
    require: [true, "Booking must have a price"],
  },
  paid: {
    type: Boolean,
    default: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "in-progress", "canceled"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

bookingSchema.pre(/^find/, function (next) {
  this.populate({
    path: "serviceProvider",
    select: "user service",
  }).populate({
    path: "user",
    select: "firstName",
  });
  next();
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
