const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerUserControl = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Empty fields
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please provide all fields");
    }

    // Hash password
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    req.body.password = hashedPassword;

    const newUser = new User(req.body);

    // Before registering.. Check if the user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res
        .status(200)
        .send({ msg: "User already exists!", success: false });
    } else {
      await newUser.save();
      return res.status(200).send({
        msg: "User registered successfully",
        success: true,
        newUser: newUser,
      });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message, success: false });
  }
};

const loginUserControl = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(200)
        .send({ message: "User does not exist", success: false });
    }

    // Compare pass
    const passwordsMatched = await bcrypt.compareSync(
      // normal pass
      req.body.password,
      // encripted pass
      user.password
    );

    // Only create token when pass matched
    if (passwordsMatched) {
      // First arg: what you whant to store
      // We need secret  key to encript the token
      const token = jwt.sign({ userId: user._id }, process.env.SCERET_KEY, {
        expiresIn: "5d",
      });

      return res.status(200).send({
        message: "User logged in successfully",
        success: true,
        // Send this generated token to front
        data: token,
      });
    } else {
      return res
        .status(200)
        .send({ message: "Password is incorrect", success: false });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message, success: false });
  }
};

const profileUserControl = async (req, res, next) => {
  try {
    const user = await User.findById(req.body.userId);
    // While loggin or registering our users pass is still undefined since we need token
    user.password = undefined;
    return res.status(200).send({
      message: "Showing user data!",
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message, success: false });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).send({
      totalUsers: users.length,
      msg: "successful request",
      users,
    });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

// const getSingleTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const singleTask = await Task.findOne({ _id: taskID });

//     if (!singleTask) {
//       return res.status(404).json({ msg: `No task with id: ${taskID}` });
//     }
//     res.status(201).json({ singleTask });
//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// };

module.exports = {
  registerUserControl,
  loginUserControl,
  profileUserControl,
  getAllUsers,
};
