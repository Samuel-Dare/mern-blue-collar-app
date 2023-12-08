const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const compression = require("compression");

const usersRouter = require("./routes/usersRoute");
const serviceProvidersRoute = require("./routes/serviceProvidersRoute");
// const servicesRouter = require("./routes/servicesRoute");
// const serviceCategoriesRouter = require("./routes/serviceCategoriesRoute");
const globalErrorHandler = require("./controllers/errorsController");
const AppError = require("./utils/appError");

// CONFIGURATIONS
const app = express();
dotenv.config();

// app.enable("trust proxy");

// GLOBAL MIDDLEWARES

app.use((req, res, next) => {
  // Set Cache-Control headers to prevent caching
  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, private"
  );
  next();
});

// Set security HTTP headers
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// To enable cross-origin resource sharing
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://my-blue-collars-app.netlify.app",
];

const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

app.use(cors(corsOptions));

// Reading data from the body into req.body
app.use(express.json({ limit: "10kb" }));

// Reading data from cookie
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
// app.use(hpp({whitelist:[]}));

// Development logging
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
// console.log(app.get("env"));
// console.log(process.argv);

// Limit request from the same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api/v1/users/login", limiter);

app.use(compression());

// Test middleware
app.use((req, res, next) => {
  // console.log(req.cookies);
  next();
});

// Serve the "public/img" directory as a static folder
app.use(express.static(`${__dirname}/public`));

// Routes
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/serviceProviders", serviceProvidersRoute);
// app.use("/api/v1/services", servicesRouter);
// app.use("/api/v1/serviceCategories", serviceCategoriesRouter);
// app.use("/api/v1/serviceProviders", serviceProvidersRouter);
// app.use("/api/v1/appointments", appointmentsRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
