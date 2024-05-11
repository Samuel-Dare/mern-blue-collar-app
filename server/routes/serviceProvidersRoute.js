const express = require("express");
const serviceProvidersControllers = require("../controllers/serviceProvidersControllers");
const authsController = require("../controllers/authsController");
const uploadsController = require("../controllers/uploadsController");

const router = express.Router();

router.post(
  "/signupAsProfessional",
  (req, res, next) => {
    console.log(req.body);
    const bodyKeys = Object.keys(req.body);
    // Check if only 'email' and 'password' fields are present
    if (
      bodyKeys.length === 4 &&
      bodyKeys.includes("email") &&
      bodyKeys.includes("password") &&
      bodyKeys.includes("services") &&
      bodyKeys.includes("location")
    ) {
      authsController.login(req, res, next); // Call the protect middleware
      next();
    } else {
      next(); // Proceed to the next middleware without applying protection
    }
  },
  authsController.signupAsProfessional
);

router.route("/").get(serviceProvidersControllers.getAllServiceProviders);

router
  .route("/:serviceProviderId")
  .get(serviceProvidersControllers.getServiceProvider);

// router
//   .use(authsController.protect)
//   .patch(usersController.updateUser)
//   .delete(usersController.deleteUser);

module.exports = router;
