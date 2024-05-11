const multer = require("multer");
const sharp = require("sharp");
const PhoneNumber = require("libphonenumber-js");

const User = require("../models/usersModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/img/users');
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split('/')[1];
//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   }
// });
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadUserPhoto = upload.single("photo");

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword.",
        400
      )
    );
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(
    req.body,
    "firstName",
    "lastName",
    "phone",
    "address"
  );
  if (req.file) filteredBody.photo = req.file.filename;

  // const { firstName, lastName, photo, phone, role } = filteredBody;

  const existingUser = await User.findById(req.user.id);

  if (!existingUser) {
    return next(new AppError("User not found", 400));
  }

  // console.log(req.body);
  // console.log(req.user);
  // Check if the user made any changes

  const isDataChanged = Object.keys(req.body).some((key) => {
    return existingUser[key] !== req.body[key];
  });

  // const formIsNotchanged =
  //   firstName === req.user.firstName &&
  //   lastName === req.user.lastName &&
  //   photo === req.user.file &&
  //   phone === req.user.phone &&
  //   role === req.user.role;

  if (!isDataChanged) {
    // If no changes were made, respond with a message
    return res.status(204).json();
  }

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined! Please use /signup instead",
  });
};

// middleware to format and validate Nigerian phone number
exports.formatAndValidateNigerianPhoneNumber = (req, res, next) => {
  // Check if the phone field exists in the request body
  if ("phone" in req.body) {
    let { phone } = req.body;

    if (phone.startsWith("0")) {
      req.body.phone = "+234" + phone.slice(1);
    } else if (!phone.startsWith("+234")) {
      req.body.phone = "+234" + phone;
    }

    // Validate if the phone number is a Nigerian number
    const phoneNumber = new PhoneNumber(req.body.phone, "NG");
    if (!phoneNumber.isValid()) {
      return next(
        new AppError("Please provide a valid Nigerian phone number", 400)
      );
    }
  }

  next();
};

exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);

// Do NOT update passwords with this!
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
