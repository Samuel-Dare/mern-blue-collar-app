const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log(
    "UNCAUGHT SYNCHRONOUS EXCEPTION💥💥💥 Server shutting down... \n",
    err
  );
  process.exit(1);
});

const app = require("./app");

const PORT = process.env.PORT || 9003;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB connected successfully...`));

const server = app.listen(PORT, () =>
  console.log(`App is running on port ${PORT}`)
);

process.on("unhandledRejection", (err) => {
  console.log(
    "UNHANDLED PROMISE/ASYNCHRONOUS REJECTION💥💥💥 Server shutting down...\n",
    err
  );
  server.close(() => process.exit(1));
});
