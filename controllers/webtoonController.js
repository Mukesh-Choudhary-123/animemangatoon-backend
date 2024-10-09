// controllers/webtoonController.js
const Webtoon = require("../models/webtoonModel");

// @desc    Get all webtoons
// @route   GET /webtoons
exports.getAllWebtoons = async (req, res) => {
  try {
    const webtoons = await Webtoon.find();
    res.status(200).json(webtoons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get webtoon by ID
// @route   GET /webtoons/:id
exports.getWebtoonById = async (req, res) => {
  try {
    const webtoon = await Webtoon.findById(req.params.id);
    if (!webtoon) {
      return res.status(404).json({ message: "Webtoon not found" });
    }
    res.status(200).json(webtoon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Add new webtoon
// @route   POST /webtoons
exports.createWebtoon = async (req, res) => {
  const { title, description, characters } = req.body;
  try {
    const webtoon = new Webtoon({ title, description, characters });
    await webtoon.save();
    res.status(201).json(webtoon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Delete webtoon
// @route   DELETE /webtoons/:id
// controllers/webtoonController.js

exports.deleteWebtoon = async (req, res) => {
  try {
    const webtoon = await Webtoon.findById(req.params.id);

    if (!webtoon) {
      return res.status(404).json({ message: "Webtoon not found" });
    }

    await Webtoon.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Webtoon removed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
