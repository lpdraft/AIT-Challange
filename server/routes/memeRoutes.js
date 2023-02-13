const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");

const {
  getAllGifs,
  getSingleGif,
  addGifs,
  updateGif,
  deleteGif,
} = require("../controllers/MemeController");

router.get("/", getAllGifs);
router.get("/single/:id", getSingleGif);
router.post("/add", upload.single("image"), addGifs);
router.put("/update/:id", upload.single("image"), updateGif);
router.delete("/delete/:id", deleteGif);

module.exports = router;
