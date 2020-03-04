const path = require("path");
const router = require("express").Router();
const plannersRoutes = require("./api/planners");

// API Routes
router.use("/api", plannersRoutes);

// If no API routes are hit, send the React app
<<<<<<< HEAD:project-3/server/routes/plannerIndex.js
router.use(function (req, res) {
=======
router.use(function(req, res) {
>>>>>>> 6261a62810a336649561e8a65883cc6c45c27e0c:routes/plannerIndex.js
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
