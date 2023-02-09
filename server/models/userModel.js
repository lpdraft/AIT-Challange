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

  avatar: {
    type: String,
    required: false,
    default:
      "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
  },

  isAdmin: {
    type: Boolean,
    required: false,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
