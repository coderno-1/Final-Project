const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
const homeRouter = require("./routes/index");
const cartRouter = require("./routes/cartRouter");


const db = require("./config/mongoose-connection");

// View engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

// Global locals (VERY IMPORTANT)
app.use((req, res, next) => {
  res.locals.user = null;      // later: req.user
  res.locals.cartCount = 0;   // later: real cart logic
  next();
});

// Routes
app.use("/", homeRouter);
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/cart", cartRouter);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
