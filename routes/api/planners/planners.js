const router = require("express").Router();
const plannerController = require("../../../controllers/plannerController");

//Login

// Landing page call
router.route("/:id")
    .post(plannerController.create);

// Saved page calls
router.route("/saved")
    .get(plannerController.findAllSaved);

// router.route("/delete/:id")
//   	.delete(plannerController.remove);

module.exports = router;