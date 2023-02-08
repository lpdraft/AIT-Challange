const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const getDataUri = require("../utils/dataUri");
const cloudinary = require("cloudinary");

const registerUserControl = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const file = req.file;

    // Empty fields
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please provide all fields");
    }

    // Hash password
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    req.body.password = hashedPassword;

    // Cloudinary
    const fileUri = getDataUri(file);
    const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });

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
    return res.status(500).send({ msg: error.msg, success: false });
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

const userVerificationControl = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    // While loggin or registering our users pass is still undefined since we need token
    user.password = undefined;
    return res.status(200).send({
      msg: "Showing user data!",
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).send({ msg: error.msg, success: false });
  }
};

const getSingleUserControl = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const singleUser = await User.findOne({ _id: userId });

    if (!singleUser) {
      return res.status(404).json({ msg: `No user found with id: ${userId}` });
    }
    res.status(201).send({ success: true, data: singleUser });
  } catch (error) {
    res.status(500).send({ success: false, msg: error.msg });
  }
};

const updateUserControl = async (req, res) => {
  try {
    const { id: userId } = req.params;

    const updatedUser = await User.findOneAndUpdate({ _id: userId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res
        .status(404)
        .send({ msg: `We could not found a user with id: ${userId}` });
    }
    res.status(200).send({ success: true, updatedUser });
  } catch (error) {
    res.status(500).send({ success: false, msg: error.msg });
  }
};

const updateProfilePic = async (req, res) => {
  try {
    // Cloudinary
    const file = req.file;
    const fileUri = getDataUri(file);

    const user = await User.findById(req.user._id);
    const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

    await cloudinary.v2.uploader.destroy(user.avatar.public_id);
    user.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
    await user.save();
  } catch (error) {
    res.status(500).send({ success: false, msg: error.msg });
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

module.exports = {
  registerUserControl,
  loginUserControl,
  userVerificationControl,
  getSingleUserControl,
  updateUserControl,
  updateProfilePic,
  getAllUsers,
};
