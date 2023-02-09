const express = require("express");
const app = express();

const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const connectDB = require("./config/dbConfig");

app.use(express.json());
app.use(cors());
app.use(helmet());

// Enpoints
const userRouter = require("./routes/userRoute");

app.use("/api/users", userRouter);

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
