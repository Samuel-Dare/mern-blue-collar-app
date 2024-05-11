const User = require("../models/usersModel");
const Booking = require("../models/bookingsModel");
const ServiceProvider = require("../models/serviceProvidersModel");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const { initializePayment } = require("../public/js/paystack");

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  const professional = await ServiceProvider.findById(req.params.id);

  const formData = {
    amount: req.body.amount,
    email: req.body.email,
    bank: req.body.bank,
  };

  initializePayment(formData, (error, body) => {
    if (error) {
      return res.redirect(
        `/professionals/${professional.slug}?alert=error&message=${error.message}`
      );
    }
    const response = JSON.parse(body);
    res.redirect(response.data.url);
  });
});

const createBookingCheckout = async (transaction) => {
  const professionalId = transaction.metadata.professional;
  const user = (await User.findOne({ email: transaction.customer.email })).id;
  const price = transaction.amount / 100; // Assuming the amount is in kobo, so divide by 100 to convert to naira
  await Booking.create({ serviceProvider: professionalId, user, price });
};

exports.handlePaystackWebhook = async (req, res, next) => {
  const { data, event } = req.body;

  // Extract necessary information from the payload based on Paystack webhook structure
  const transaction = data;

  // Create booking using extracted information
  try {
    if (event === "charge.success") {
      await createBookingCheckout(transaction);
      res.status(200).json({ received: true });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
