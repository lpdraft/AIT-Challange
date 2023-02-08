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

  isAdmin: {
    type: Boolean,
    required: false,
    default: false,
  },

  avatar: {
    public_id: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
  },

  userlist: [
    {
      gifs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userList",
      },
      poster: String,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
