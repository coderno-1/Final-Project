const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");
const bcrypt = require("bcrypt");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    try {
      const owners = await ownerModel.find();

      if (owners.length > 0) {
        return res
          .status(403)
          .send("You don't have permission to create a new owner.");
      }

      const { fullname, email, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const createdOwner = await ownerModel.create({
        fullname,
        email,
        password: hashedPassword
      });

      res.status(201).json(createdOwner);

    } catch (error) {
      res.status(500).send("Server error");
    }
  });
}

router.get("/login", (req, res) => {
  res.render("admin/login", {
    user: req.user || null   // later real admin
  });
});
router.get("/dashboard", (req, res) => {
  res.render("admin/dashboard", {
    user: req.user || null   // later real admin
  });
});

router.get("/profile", (req, res) => {
  res.render("admin/profile", {
    user: req.user || null
  });
});

router.get("/products", (req, res) => {
  res.render("admin/products", {
    user: req.user || null
  });
});


module.exports = router;