const router = require("express").Router();
const customerRoutes = require("./customers");

// Book routes
router.use("/customers", customerRoutes);

module.exports = router;
