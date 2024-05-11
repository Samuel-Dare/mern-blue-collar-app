const mongoose = require("mongoose");
const crypto = require("crypto");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const User = require("../models/usersModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Email = require("../utils/email");
const ServiceProvider = require("../models/serviceProvidersModel");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = async (user, statusCode, req, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    Object.assign(cookieOptions, {
      secure: true,
      sameSite: "none",
    });
  }

  res.cookie("jwt", token, cookieOptions);

  // Remove sensitive data from output
  user.password = undefined;

  let responseData = {
    status: "success",
    token,
    data: {
      user,
    },
  };

  // If user is a professional, fetch and include professional data
  if (user.role === "professional") {
    const professional = await ServiceProvider.findOne({ user: user._id });
    responseData.data.professional = professional;
  }

  res.status(statusCode).json(responseData);
};

const generateConfirmationData = () => {
  const confirmationToken = crypto.randomBytes(32).toString("hex");
  const confirmationTokenExpires = Date.now() + 24 * 60 * 60 * 1000; // Token expires in 24 hours
  return { confirmationToken, confirmationTokenExpires };
};

const createUser = async (request, signUpAsPro = false) => {
  const { confirmationToken, confirmationTokenExpires } =
    generateConfirmationData();

  const newUser = await User.create({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    phone: request.body.phone,
    role: signUpAsPro ? "professional" : undefined,
    password: request.body.password,
    passwordConfirm: request.body.passwordConfirm,
    confirmationToken,
    confirmationTokenExpires,
  });

  return newUser;
};

const sendConfirmationEmail = async (user, req) => {
  const { confirmationToken, confirmationTokenExpires } =
    generateConfirmationData();

  // Update user object
  user.confirmationToken = confirmationToken;
  user.confirmationTokenExpires = confirmationTokenExpires;
  await user.save({ validateBeforeSave: false });

  try {
    const url = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/users/confirmEmail/${confirmationToken}`;

    await new Email(user, url).sendEmailConfirmation();
  } catch (err) {
    user.confirmationToken = undefined;
    user.confirmationTokenExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError("Error sending the email. Please try again later.", 500)
    );
  }
};

const resendConfirmationEmailLink = (request, email) =>
  `${request.protocol}://${request.get(
    "host"
  )}/api/v1/users/resendEmailConfirmation/${email}`;

const signupMessage = (request, email) =>
  `Please confirm your email address to proceed. In case of any system glitch and you didn't get any email, please click <a href="${resendConfirmationEmailLink(
    request,
    email
  )}">here</a> to get the confirmation link again!`;

const sendWelcomeEmail = async (user, req) => {
  const url = `${req.protocol}://${req.get("host")}/me`;
  await new Email(user, url).sendWelcome();
};

const sendWelcomeProfessionalEmail = async (user, req) => {
  if (!user.role === "professional") {
    const url = `${req.protocol}://${req.get("host")}/me`;
    await new Email(user, url).sendWelcomeProfessional();
  } else return;
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await createUser(req);

  // Send email confirmation
  await sendConfirmationEmail(newUser, req);

  // Return response indicating email confirmation is required
  res.status(201).json({
    status: "success",
    message: signupMessage(req, req.body.email),
  });
});

// exports.signupAsProfessional = catchAsync(async (req, res, next) => {
//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {
//     let user;

//     // Check if the user is already authenticated
//     if (req.user) {
//       // If user is logged in, use existing user details
//       user = req.user;
//     } else {
//       // If user is not logged in, create a new user account
//       user = await createUser(req, true);

//       // Send email confirmation
//       await sendConfirmationEmail(user, req);
//     }

//     // Create a new professional record with user details
//     const newProfessional = await ServiceProvider.create(
//       {
//         user: user._id,
//         services: req.body.services,
//         location: req.body.location,
//       },
//       { session }
//     );

//     // Commit the transaction
//     await session.commitTransaction();
//     session.endSession();

//     if (req.user) {
//       await sendWelcomeProfessionalEmail(req.user, req);

//       res.status(201).json({
//         status: "success",
//         data: {
//           user: req.user,
//           professional: newProfessional,
//         },
//       });
//     }

//     // Send response to client
//     res.status(201).json({
//       status: "success",
//       message: signupMessage(req, user.email),
//     });
//   } catch (error) {
//     // If an error occurs, abort the transaction
//     await session.abortTransaction();
//     session.endSession();

//     // Handle the error
//     return next(error);
//   }
// });

exports.signupAsProfessional = catchAsync(async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  console.log("user", req.user);

  try {
    let user;

    // Check if the user is already authenticated
    if (req.user) {
      // If user is logged in, use existing user details
      user = { ...user.toObject(), role: "professional" };
      await user.save({ validateBeforeSave: false });
    } else {
      // If user is not logged in, create a new user account
      user = await createUser(req, true);

      // Send email confirmation
      await sendConfirmationEmail(user, req);
    }

    // Perform explicit validation for user inputs
    if (
      !req.body.location ||
      !req.body.services ||
      req.body.services.length === 0 ||
      req.body.services.length > 3
    ) {
      return next(new AppError("Invalid Professional input data.", 400));
    }
    // Prepare data for creating professional record
    const professionalData = {
      user: user._id,
      services: req.body.services,
      location: req.body.location,
    };

    // Create a new professional record with user details
    const newProfessional = await ServiceProvider.create(
      [professionalData], // Pass an array of documents
      { session }
    );

    if (!newProfessional || newProfessional.length === 0) {
      throw new Error("Failed to create professional record.");
    }

    if (req.user) {
      await sendWelcomeProfessionalEmail(req.user, req);

      res.status(201).json({
        status: "success",
        data: {
          user: req.user,
          professional: newProfessional[0],
        },
      });
    } else {
      // Send response to client
      res.status(201).json({
        status: "success",
        message: signupMessage(req, user.email),
      });
    }

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();
  } catch (error) {
    // If an error occurs, abort the transaction
    await session.abortTransaction();
    session.endSession();

    // Handle the error
    return next(error);
  }
});

exports.confirmEmail = catchAsync(async (req, res, next) => {
  const { confirmationToken } = req.params;

  // Find user by confirmation token
  const user = await User.findOne({
    confirmationToken: confirmationToken,
    confirmationTokenExpires: { $gt: Date.now() },
  });

  if (!user) {
    return next(new AppError("Invalid or expired confirmation token", 400));
  }

  // Update user's emailConfirmed status
  user.emailConfirmed = true;
  user.confirmationToken = undefined;
  user.confirmationTokenExpires = undefined;
  await user.save({ validateBeforeSave: false });

  try {
    // Send email
    sendWelcomeEmail(user, req);
    sendWelcomeProfessionalEmail(user, req);

    // Respond with success message
    res.status(200).json({
      status: "success",
      message: "Email confirmed successfully. You can now log in.",
    });
  } catch (err) {
    user.emailConfirmed = false;
    user.confirmationToken = confirmationToken;
    user.confirmationTokenExpires = Date.now();
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError("Error sending the email. Please try again later.", 500)
    );
  }
});

exports.resendEmailConfirmation = catchAsync(async (req, res, next) => {
  const { email } = req.params;
  const user = await User.findOne({ email });

  if (!user) {
    return next(new AppError("User not found", 404));
  }

  // Resend confirmation email
  await sendConfirmationEmail(user, req);

  // Return success response
  res.status(200).json({
    status: "success",
    message: "Confirmation email has been resent.",
  });
});

// Implement cleanup mechanism to remove expired confirmation tokens
const removeExpiredTokens = async () => {
  await User.deleteMany({
    confirmationTokenExpires: { $lt: Date.now() },
  });
};

// Scheduled task to remove expired tokens (e.g., once a day)
setInterval(removeExpiredTokens, 24 * 60 * 60 * 1000);

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // If email is not confirmed, provide a message with a link to resend the confirmation email
  if (!user.emailConfirmed) {
    const message = `Your email is not yet confirmed. Please click <a href="${resendConfirmationEmailLink(
      req,
      email
    )}">here</a> to get the confirmation link again!`;

    return res.status(401).json({
      status: "error",
      message,
    });
  }

  // 4) If everything ok, send token to client
  createSendToken(user, 200, req, res);
});

exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_KEY
  );

  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }

  // 4) Check if user changed password after the token was issued
  if (currentUser.passwordChangedAfterTokenWasCreated(decoded.iat)) {
    return next(
      new AppError("User recently changed password! Please log in again.", 401)
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

// Only for rendered pages, no errors!
exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET_KEY
      );

      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

      // 3) Check if user changed password after the token was issued
      if (currentUser.passwordChangedAfterTokenWasCreated(decoded.iat)) {
        return next();
      }

      // THERE IS A LOGGED IN USER
      res.locals.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles ['admin', 'lead-guide']. role='user'
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }

    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("There is no user with email address.", 404));
  }

  // 2) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  try {
    const resetURL = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/users/reset-password/${resetToken}`;
    await new Email(user, resetURL).sendPasswordReset();

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError("Error sending the email. Please try again later"),
      500
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 3) Update changedPasswordAt property for the user
  // 4) Log the user in, send JWT
  createSendToken(user, 200, req, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get user from collection
  const user = await User.findById(req.user.id).select("+password");

  // 2) Check if POSTed current password is correct
  if (!(await user.correctPassword(req.body.currentPassword, user.password))) {
    return next(new AppError("Your current password is wrong.", 401));
  }

  // 3) If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  // User.findByIdAndUpdate will NOT work as intended!

  // 4) Log user in, send JWT
  createSendToken(user, 200, req, res);
});
