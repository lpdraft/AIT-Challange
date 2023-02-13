const multer = require("multer");

// Define Storage
const storage = multer.diskStorage({
  // define the dest file
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  //   add vack the extension
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});
// Upload parameter for multer
const upload = multer({
  storage: storage,
  limits: {
    fieldNameSize: 1024 * 1024 * 3,
  },
});
module.exports = upload;
