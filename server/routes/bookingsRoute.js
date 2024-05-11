const express = require("express");
const bookingsController = require("../controllers/bookingsController");
const authsController = require("../controllers/authsController");

const router = express.Router();

router.use(authsController.protect);

router.get(
  "/checkout-session/:professionalId",
  bookingsController.getCheckoutSession
);

router.post(
  "/webhook-paystack",
  express.raw({ type: "application/json" }),
  bookingsController.handlePaystackWebhook
);

router.use(authsController.restrictTo("admin", "professional"));

router
  .route("/")
  .get(bookingsController.getAllBookings)
  .post(bookingsController.createBooking);

router
  .route("/:id")
  .get(bookingsController.getBooking)
  .patch(bookingsController.updateBooking)
  .delete(bookingsController.deleteBooking);

module.exports = router;
