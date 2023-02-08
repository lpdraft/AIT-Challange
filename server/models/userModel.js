const mongoose = require("mongoose");
// const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
  },

  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Please add a secure password"],
  },

  hobbies: {
    type: String,
    required: false,
  },

  isAdmin: {
    type: Boolean,
    required: false,
    default: false,
  },

  avatar: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);
