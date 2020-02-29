const router = require("express").Router();
const plannerRoutes = require("./planners");

// Book routes
router.use("/planners", plannerRoutes);

module.exports = router;
