const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const singleUpload = require("../middlewares/multerMiddleware");

const {
  registerUserControl,
  loginUserControl,
  userVerificationControl,
  updateUserControl,
  getSingleUserControl,
  updateProfilePic,
  getAllUsers,
} = require("../controllers/UserController");

router.post("/register", singleUpload, registerUserControl);
router.post("/login", loginUserControl);
router.post("/user-data", authMiddleware, userVerificationControl);
router.patch("/edit-profile/:id", updateUserControl);
router.patch("/update-img", singleUpload, updateProfilePic);
router.get("/user-info/:id", getSingleUserControl);
router.get("/all-users", getAllUsers);

module.exports = router;
