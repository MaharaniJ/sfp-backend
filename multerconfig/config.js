const multer = require("multer");
//Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, caallback) => {
    const filename = `image-${Date.now()}.${file.originalname}`;
    caallback(null, filename);
  },
});
//filter
const filefilter = (req, file, callback) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
    return callback(new Error("Only .png .jpg & .jpeg formatted Allowed "));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: filefilter,
});


module.exports = upload;