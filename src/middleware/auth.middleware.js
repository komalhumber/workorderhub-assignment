const AppError = require('../utils/errors.util');

function authMiddleware(req, res, next) {
  const apiKeyFromHeader = req.headers['x-api-key'];
  const validApiKey = process.env.API_KEY;

  if (!apiKeyFromHeader || apiKeyFromHeader !== validApiKey) {
    return next(
      new AppError(
        401,
        'UNAUTHORIZED',
        'Invalid or missing API key'
      )
    );
  }

  next();
}

module.exports = authMiddleware;