const express = require("express");
const reviewsController = require("../controllers/reviewsController");
const authsController = require("../controllers/authsController");

const router = express.Router({ mergeParams: true });

router.use(authsController.protect);

router
  .route("/")
  .get(reviewsController.getAllReviews)
  .post(
    authsController.restrictTo("user"),
    reviewsController.setProfessionalAndUserIds,
    reviewsController.createReview
  );

router
  .route("/:id")
  .get(reviewsController.getReview)
  .patch(
    authsController.restrictTo("user", "admin"),
    reviewsController.updateReview
  )
  .delete(
    authsController.restrictTo("user", "admin"),
    reviewsController.deleteReview
  );

module.exports = router;
