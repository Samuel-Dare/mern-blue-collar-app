const Users = require("../models/usersModel");
const ServiceProviders = require("../models/serviceProvidersModel");
const Bookings = require("../models/bookingsModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.alerts = (req, res, next) => {
  const { alert } = req.query;
  if (alert === "booking")
    res.locals.alert =
      "Your booking was successful! Please check your email for a confirmation. If your booking doesn't show up here immediatly, please come back later.";
  next();
};

exports.getOverview = catchAsync(async (req, res, next) => {
  const professionals = await ServiceProviders.find();

  res.status(200).render("overview", {
    title: "All Professionals",
    professionals,
  });
});

exports.getProfessional = catchAsync(async (req, res, next) => {
  const professional = await ServiceProviders.findOne({
    slug: req.params.slug,
  }).populate({
    path: "reviews",
    fields: "review rating user",
  });

  if (!professional) {
    return next(new AppError("There is no professional with that name.", 404));
  }

  // 2) Build template
  // 3) Render template using data from 1)
  res.status(200).render("professional", {
    title: `${professional.firstName}`,
    professional,
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render("login", {
    title: "Log into your account",
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render("account", {
    title: "Your account",
  });
};

exports.getMyProfessionals = catchAsync(async (req, res, next) => {
  // 1) Find all bookings
  const bookings = await Bookings.find({ user: req.user.id });

  // 2) Find professionals with the returned IDs
  const professionalIDs = bookings.map((el) => el.firstName);
  const professionals = await ServiceProviders.find({
    _id: { $in: professionalIDs },
  });

  res.status(200).render("overview", {
    title: "My Professionals",
    professionals,
  });
});

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await Users.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).render("account", {
    title: "Your account",
    user: updatedUser,
  });
});
