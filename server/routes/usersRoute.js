const express = require("express");

const usersController = require("../controllers/usersController");
const authsController = require("../controllers/authsController");
const uploadsController = require("../controllers/uploadsController");

const router = express.Router();

router.post("/signup", authsController.signup);
router.post("/login", authsController.login);
router.get("/logout", authsController.logout);

router.post("/forgotPassword", authsController.forgotPassword);
router.patch("/resetPassword/:token", authsController.resetPassword);

// Protect all routes after this middleware
router.use(authsController.protect);

router.get("/me", usersController.getMe, usersController.getUser);
router.patch("/updateMyPassword", authsController.updatePassword);
router.patch(
  "/updateMe",
  uploadsController.uploadUserPhoto,
  uploadsController.resizeUserPhoto,
  usersController.updateMe
);
router.delete("/deleteMe", usersController.deleteMe);

router.use(authsController.restrictTo("admin"));

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createUser);

router
  .route("/:id")
  .get(usersController.getUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
