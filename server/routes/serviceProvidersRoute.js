const express = require("express");

const usersController = require("../controllers/usersController");
const authsController = require("../controllers/authsController");
const uploadsController = require("../controllers/uploadsController");

const router = express.Router();

router.route("/").get(usersController.getAllUsers);
//   .post(usersController.createUser);

// router
//   .route("/:id")
//   .get(usersController.getUser)
//   .patch(usersController.updateUser)
//   .delete(usersController.deleteUser);

module.exports = router;
