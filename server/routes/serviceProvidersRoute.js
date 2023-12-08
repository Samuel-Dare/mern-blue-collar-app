const express = require("express");

const serviceProvidersControllers = require("../controllers/serviceProvidersControllers");
const authsController = require("../controllers/authsController");
const uploadsController = require("../controllers/uploadsController");

const router = express.Router();

router.post("/signupAsProfessional", authsController.signupAsProfessional);

router.route("/").get(serviceProvidersControllers.getAllServiceProviders);

router
  .route("/:serviceProviderId")
  .get(serviceProvidersControllers.getServiceProvider);
//   .patch(usersController.updateUser)
//   .delete(usersController.deleteUser);

module.exports = router;
