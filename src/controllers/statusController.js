const workOrders = require('../data/workorders.store');
const AppError = require('../utils/errors.util');

const allowedTransitions = {
  NEW: ['IN_PROGRESS'],
  IN_PROGRESS: ['BLOCKED', 'DONE'],
  BLOCKED: ['IN_PROGRESS'],
  DONE: []
};

const updateStatus = (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const workOrder = workOrders.find(w => w.id === id);
    if (!workOrder) {
      throw new AppError(404, 'NOT_FOUND', 'Work order not found');
    }

    if (!allowedTransitions[workOrder.status].includes(status)) {
      throw new AppError(409, 'INVALID_TRANSITION', 'Invalid status transition');
    }

    workOrder.status = status;
    workOrder.updatedAt = new Date().toISOString();

    res.json({
      success: true,
      data: workOrder
    });

  } catch (err) {
    next(err);
  }
};

module.exports = {
  updateStatus
};