// routes/webtoonRoutes.js
const express = require("express");
const {
  getAllWebtoons,
  getWebtoonById,
  createWebtoon,
  deleteWebtoon,
} = require("../controllers/webtoonController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getAllWebtoons);
router.get("/:id", getWebtoonById);
router.post("/", protect, createWebtoon);
router.delete("/:id", protect, deleteWebtoon);

module.exports = router;
