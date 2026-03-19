const express = require("express");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.get("/forgot-password", (req, res) => {
  res.render("auth/forgot-password");
});

module.exports = router;

