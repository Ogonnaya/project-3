
const path = require("path");
const router = require("express").Router();
const customersRoutes = require("./api/customers");

// API Routes
router.use("/api/customers", customersRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
