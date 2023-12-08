const multer = require("multer");
const sharp = require("sharp");

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadArticleImage = upload.single("image");

exports.uploadUserPhoto = upload.single("photo");

exports.resizeArticleImage = (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `article-${req.user.id}-${Date.now()}.jpeg`;

  sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/articles/${req.file.filename}`);

  next();
};

exports.resizeUserPhoto = (req, res, next) => {
  if (!req.file) return next();

  // if (!req.user)
  //   req.file.filename = `user-${req.body.email}-${Date.now()}.jpeg`;
  // else

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);
  next();
};
