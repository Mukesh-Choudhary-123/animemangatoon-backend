// app.js
const express = require("express");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const webtoonRoutes = require("./routes/webtoonRoutes");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");

// Load config
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use("/webtoons", webtoonRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
