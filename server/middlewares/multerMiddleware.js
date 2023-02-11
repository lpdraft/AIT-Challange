const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, __dirname + "./uploads/");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const singleUpload = multer({ storage: storage }).single("file");

module.exports = { singleUpload };
