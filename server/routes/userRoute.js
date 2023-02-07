const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  registerUserControl,
  loginUserControl,
  profileUserControl,
  getAllUsers,
} = require("../controllers/UserController");

router.post("/register", registerUserControl);
router.post("/login", loginUserControl);
router.post("/me", authMiddleware, profileUserControl);
router.get("/all-users", getAllUsers);

module.exports = router;
