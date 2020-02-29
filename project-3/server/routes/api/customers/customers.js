const router = require("express").Router();
const customerController = require("../../../controllers/customerController");

// Landing page call
router.route("/:id")
	.post(customerController.create);

// Saved page calls
router.route("/saved")
  	.get(customerController.findAllSaved);

// router.route("/delete/:id")
//   	.delete(plannerController.remove);

module.exports = router;