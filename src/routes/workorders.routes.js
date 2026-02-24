const express = require("express");
const router = express.Router();

const controller = require("../controllers/workorders.controller");
const statusController = require("../controllers/statusController");

// Create
router.post("/", controller.createWorkOrder);

// Get all
router.get("/", controller.getAllWorkOrders);

// Get single
router.get("/:id", controller.getWorkOrderById);

// Update full
router.put("/:id", controller.updateWorkOrder);

// Delete
router.delete("/:id", controller.deleteWorkOrder);

// Update status (lifecycle controlled)
router.patch("/:id/status", statusController.updateStatus);

module.exports = router;