
const express = require("express");
const router = express.Router();
const foodControllers = require("../controllers/controller.food")
router.route("/")
    .get(foodControllers.getAllFood)
    .post(foodControllers.addFood)
router.route("/:foodId")
    .get(foodControllers.getFood)
    .put(foodControllers.editFood)
    .delete(foodControllers.deleteFood)

module.exports = router;