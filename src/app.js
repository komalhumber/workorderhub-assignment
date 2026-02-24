const express = require('express');

const requestIdMiddleware = require('./middleware/requestId.middleware');
const errorMiddleware = require('./middleware/error.middleware');
const notFoundMiddleware = require('./middleware/notfound.middleware');

const workOrdersRoutes = require('./routes/workorders.routes');

const app = express();

app.use(express.json());
app.use(requestIdMiddleware);

// Public route
app.get('/health', (req, res) => {
  res.json({
    requestId: req.requestId,
    success: true,
    data: {
      status: "ok",
      time: new Date().toISOString()
    }
  });
});

// WorkOrders API
app.use('/api/workorders', workOrdersRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;