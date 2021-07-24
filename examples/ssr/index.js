const express = require('express');

// Custom error
const errorService = require('custom-error-service');

const app = express();
const port = 3000;

app.use((error, request, response, next) => {
  if (response.headersSent) {
    return next(error);
  }

  const status = error.statusCode || 500;
  const message = error.message || 'Custom error sample.';
  const detail = error.detail || '';

  response.status(status).json({
    success: false,
    status: 'error',
    code: status,
    message,
    detail,
  });
});

app.get('/custom-error', (request, response) => {
  const error = new errorService.CustomError(
    400,
    'Bad Request',
    'Custom error service for request'
  );

  response.status(error.statusCode).json({
    error,
  });
});

app.get('/bad-gateway', (request, response) => {
  const error = new errorService.BadRequest();

  response.status(error.statusCode).json({
    error,
  });
});

app.get('/bad-request', (request, response) => {
  const error = new errorService.BadRequest();

  response.status(error.statusCode).json({
    error,
  });
});

app.get('/forbidden', (request, response) => {
  const error = new errorService.Forbidden();

  response.status(error.statusCode).json({
    error,
  });
});

app.get('/method-not-allowed', (request, response) => {
  const error = new errorService.MethodNotAllowed();

  response.status(error.statusCode).json({
    error,
  });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
