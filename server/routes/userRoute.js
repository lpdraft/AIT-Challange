const express = require("express");
const router = express.Router();

const {
  registerUserControl,
  loginUserControl,
  profileUserControl,
  getAllUsers,
} = require("../controllers/UserController");

router.post("/register", registerUserControl);
router.post("/login", loginUserControl);
router.get("/me", profileUserControl);
router.get("/all-users", getAllUsers);

module.exports = router;
