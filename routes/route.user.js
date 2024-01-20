const express = require("express");
const router = express.Router();
const usersController = require("../controllers/controller.user")


router.route("/")
    .get(usersController.getAllUsers)

router.route("/login")
    .post(usersController.login)
router.route("/register")
    .post(usersController.register)

module.exports = router;