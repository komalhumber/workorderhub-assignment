const AppError = require('../utils/errors.util');

function notFoundMiddleware(req, res, next) {
  next(new AppError(404, 'NOT_FOUND', 'Route not found'));
}

module.exports = notFoundMiddleware;