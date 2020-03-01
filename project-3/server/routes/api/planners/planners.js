const router = require("express").Router();
const plannerController = require("../../../controllers/plannerController");

// Landing page call
router.route("/:id")
<<<<<<< HEAD
	.post(plannerController.create);

// Saved page calls
router.route("/saved")
  	.get(plannerController.findAllSaved);
=======
    .post(plannerController.create);

// Saved page calls
router.route("/saved")
    .get(plannerController.findAllSaved);
>>>>>>> 8e553aa2b849f6df4a890a342da02f2c9e1cff37

// router.route("/delete/:id")
//   	.delete(plannerController.remove);

module.exports = router;