const express = require("express");
const router = express.Router();
const orderControllers = require("../controllers/controller.order");

router
    .route("/")
    .get(orderControllers.getAllOrders)
    .post(orderControllers.addOrders)

router.route("/:orderId")
    .get(orderControllers.getOrder)
    .delete(orderControllers.deleteOrders)
    .put(orderControllers.updateOrders)


module.exports = router;