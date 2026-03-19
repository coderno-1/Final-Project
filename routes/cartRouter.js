const express = require("express");
const router = express.Router();

// View cart
router.get("/", (req, res) => {
  const cart = req.session.cart || [];
  res.render("cart", { cart });
});

// Add to cart
router.post("/add", (req, res) => {
  const { id, name, price } = req.body;

  if (!req.session.cart) req.session.cart = [];

  const existing = req.session.cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    req.session.cart.push({
      id,
      name,
      price,
      qty: 1
    });
  }

  res.redirect("/cart");
});

// Remove item
router.post("/remove/:id", (req, res) => {
  req.session.cart = req.session.cart.filter(
    item => item.id !== req.params.id
  );
  res.redirect("/cart");
});

module.exports = router;
