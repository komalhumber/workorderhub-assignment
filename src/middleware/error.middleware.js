const { errorResponse } = require('../utils/response.util');
const AppError = require('../utils/errors.util');

function errorMiddleware(err, req, res, next) {
  if (err instanceof AppError) {
    return errorResponse(res, req.requestId, err, err.statusCode);
  }

  const internalError = {
    code: 'INTERNAL_ERROR',
    message: 'Something went wrong',
    details: []
  };

  return errorResponse(res, req.requestId, internalError, 500);
}

module.exports = errorMiddleware;