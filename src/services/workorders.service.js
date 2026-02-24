const { v4: uuidv4 } = require("uuid");
const workOrders = require("../data/workorders.store");
const AppError = require("../utils/errors.util");

function createWorkOrder(data) {
  const { title, description, department, priority, requesterName, assignee } = data;

  if (!title || title.length < 5) {
    throw new AppError(400, "VALIDATION_ERROR", "Title must be at least 5 characters");
  }

  if (!description || description.length < 10) {
    throw new AppError(400, "VALIDATION_ERROR", "Description must be at least 10 characters");
  }

  const newWorkOrder = {
    id: uuidv4(),
    title,
    description,
    department,
    priority,
    status: "NEW",
    requesterName,
    assignee: assignee || null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  workOrders.push(newWorkOrder);
  return newWorkOrder;
}

function getAllWorkOrders() {
  return workOrders;
}

function getWorkOrderById(id) {
  const workOrder = workOrders.find(w => w.id === id);

  if (!workOrder) {
    throw new AppError(404, "NOT_FOUND", "Work order not found");
  }

  return workOrder;
}

function updateWorkOrder(id, data) {
  const workOrder = workOrders.find(w => w.id === id);

  if (!workOrder) {
    throw new AppError(404, "NOT_FOUND", "Work order not found");
  }

  const { title, description, priority, assignee } = data;

  if (title) workOrder.title = title;
  if (description) workOrder.description = description;
  if (priority) workOrder.priority = priority;
  if (assignee !== undefined) workOrder.assignee = assignee;

  workOrder.updatedAt = new Date().toISOString();

  return workOrder;
}

function deleteWorkOrder(id) {
  const index = workOrders.findIndex(w => w.id === id);

  if (index === -1) {
    throw new AppError(404, "NOT_FOUND", "Work order not found");
  }

  const deleted = workOrders.splice(index, 1);
  return deleted[0];
}

module.exports = {
  createWorkOrder,
  getAllWorkOrders,
  getWorkOrderById,
  updateWorkOrder,
  deleteWorkOrder
};