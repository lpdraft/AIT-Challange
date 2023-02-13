const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const connectDB = require("./config/dbConfig");

app.use(express.json());
app.use(cors());

// Enpoints
const userRouter = require("./routes/userRoute");
const memeRouter = require("./routes/memeRoutes");

app.use("/api/users", userRouter);
app.use("/api/memes", memeRouter);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI_VAR);
    app.listen(port, console.log(`~Server running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
