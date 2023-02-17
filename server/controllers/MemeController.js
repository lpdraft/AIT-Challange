const memeModel = require("../models/memeModel");
const cloudinary = require("../utils/cloudinary");
const fs = require("fs");

const getAllGifs = async (req, res) => {
  try {
    const allGifs = await memeModel.find({});
    res
      .status(200)
      .send({ msg: "Here are your all uploaded gifs!", data: allGifs });
  } catch (error) {
    res.status(500).json({
      msg: "Sorry, we are unable to show your gifs ",
    });
  }
};

const addGifs = async (req, res) => {
  try {
    const { path } = req.file;
    const result = await cloudinary.uploader.upload(path);

    const newGif = new memeModel({
      title: req.body.title,
      gifType: req.body.gifType,
      imgUrl: req.body.imgUrl,
      image: result.secure_url,
      cloudinary_id: result.public_url,
    });
    await newGif.save();
    fs.unlinkSync(path);
    res.status(200).json({ msg: "gifs added successfully!", data: newGif });
  } catch (error) {
    res.status(500).json({
      msg: "Something went wrong, unable to add gif",
    });
  }
};

const updateGif = async (req, res) => {
  try {
    // const { id } = req.parmas;
    let gif = await memeModel.findById(req.params.id).exec();
    await cloudinary.uploader.destroy(gif.cloudinary_id);

    let result = "";

    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }

    const newData = {
      title: req.body.title || gif.title,
      gifType: req.body.gifType || gif.gifType,
      imgUrl: req.body.imgUrl || git.imgUrl,
      image: result?.secure_url || gif.image,
      cloudinary_id: result?.public_url || gif.cloudinary_id,
    };

    gif = await memeModel.findByIdAndUpdate(req.params.id, newData, {
      new: true,
    });

    if (req.file) {
      fs.unlinkSync(req.file.path);
    }

    res.status(200).json({ msg: "gif updated successfully!", data: gif });
  } catch (error) {
    res.status(500).json({
      msg: "Something went wrong, could not update your gif info",
    });
  }
};

const getSingleGif = async (req, res) => {
  try {
    let gif = await memeModel.findById(req.params.id).lean().exec();
    res
      .status(200)
      .json({ msg: `Here is the gif with id: ${req.params.id}!`, data: gif });
  } catch (error) {
    res.status(404).json({
      msg: `Sorry, we could noty finde ant gif with id: ${req.params.id}`,
    });
  }
};

const deleteGif = async (req, res) => {
  try {
    let gif = await memeModel.findById(req.params.id).exec();
    await cloudinary.uploader.destroy(gif.cloudinary_id);

    await memeModel.deleteOne();
    res.status(200).json(`Contact wirh name: ${gif.name} has benn removed!`);
  } catch (error) {
    res.status(500).json({
      msg: "Something went wrong, unable to delete gif",
    });
  }
};

module.exports = {
  getAllGifs,
  addGifs,
  getSingleGif,
  updateGif,
  deleteGif,
};
