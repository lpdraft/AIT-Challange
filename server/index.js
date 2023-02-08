const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const cloudinary = require("cloudinary");

require("dotenv").config();
const connectDB = require("./config/dbConfig");

app.use(express.json());
app.use(cors());
app.use(helmet());
// Enpoints
const userRouter = require("./routes/userRoute");

app.use("/api/users", userRouter);

// Cloudinary config
cloudinary.v2.config({
  cloud_name: "dmulmjq3m",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`~Server running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
