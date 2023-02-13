const mongoose = require("mongoose");
const { Schema } = mongoose;

const MemeSchema = new Schema({
  title: String,
  gifType: String,
  imgUrl: String,
  image: String,
  userID: String,
  cloudinary_id: String,
  ower: { type: Schema.Types.ObjectId, ref: "users" },
});

module.exports = mongoose.model("Meme", MemeSchema);
