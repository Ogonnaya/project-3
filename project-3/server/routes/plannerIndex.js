const path = require("path");
const router = require("express").Router();
const plannersRoutes = require("./api/planners");

// API Routes
router.use("/api/planners", plannersRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
