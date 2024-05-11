const express = require("express");
const viewsController = require("../controllers/viewsController");
const authController = require("../controllers/authsController");

const router = express.Router();

router.use(viewsController.alerts);

router.get("/", authController.isLoggedIn, viewsController.getOverview);

router.get(
  "/professionals/:slug",
  authController.isLoggedIn,
  viewsController.getProfessional
);
router.get("/login", authController.isLoggedIn, viewsController.getLoginForm);
router.get("/me", authController.protect, viewsController.getAccount);

router.get(
  "/my-professionals",
  authController.protect,
  viewsController.getMyProfessionals
);

router.post(
  "/submit-user-data",
  authController.protect,
  viewsController.updateUserData
);

module.exports = router;
