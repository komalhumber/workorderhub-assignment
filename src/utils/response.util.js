function successResponse(res, requestId, data, statusCode = 200) {
  return res.status(statusCode).json({
    requestId,
    success: true,
    data
  });
}

function errorResponse(res, requestId, error, statusCode) {
  return res.status(statusCode).json({
    requestId,
    success: false,
    error: {
      code: error.code,
      message: error.message,
      details: error.details || []
    }
  });
}

module.exports = {
  successResponse,
  errorResponse
};