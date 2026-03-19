const express = require("express");
const router = express.Router();

// Home page
router.get("/", (req, res) => {
  res.render("home");
});

// Login page
router.get("/login", (req, res) => {
  res.render("auth/login");
});

// Signup page
router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

// Forgot password page
router.get("/forgot-password", (req, res) => {
  res.render("auth/forgot-password");
});

module.exports = router;
