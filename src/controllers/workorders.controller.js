const service = require("../services/workorders.service");

const createWorkOrder = (req, res, next) => {
  try {
    const data = service.createWorkOrder(req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

const getAllWorkOrders = (req, res, next) => {
  try {
    const data = service.getAllWorkOrders();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

const getWorkOrderById = (req, res, next) => {
  try {
    const data = service.getWorkOrderById(req.params.id);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

const updateWorkOrder = (req, res, next) => {
  try {
    const data = service.updateWorkOrder(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

const deleteWorkOrder = (req, res, next) => {
  try {
    const data = service.deleteWorkOrder(req.params.id);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createWorkOrder,
  getAllWorkOrders,
  getWorkOrderById,
  updateWorkOrder,
  deleteWorkOrder
};