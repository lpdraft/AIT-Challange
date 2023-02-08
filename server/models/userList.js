const mongoose = require("mongoose");
// const validator = require("validator");
const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide your name"],
  },
  description: {
    type: String,
    required: [true, "Please provide your email"],
  },

  userlist: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      video: {
        public_id: {
          type: String,
          required: false,
        },
        url: {
          type: String,
          required: false,
        },
      },
    },
  ],
  poster: {
    public_id: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
  },
});

module.exports = mongoose.model("User", userSchema);
