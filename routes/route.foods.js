
const express = require("express");
const router = express.Router();
const foodControllers = require("../controllers/controller.food");
const verifyToken = require("../middlewares/verifyToken");
const allowedTo = require("../middlewares/allowedTo");
const userRoles = require("../utils/userRoles");
router.route("/")
    .get(foodControllers.getAllFood)
    .post(verifyToken,allowedTo(userRoles.ADMIN),foodControllers.addFood)
router.route("/:foodId")
    .get(foodControllers.getFood)
    .put(verifyToken,allowedTo(userRoles.ADMIN),foodControllers.editFood)
    .delete(verifyToken,allowedTo(userRoles.ADMIN),foodControllers.deleteFood)

module.exports = router;