const express = require('express');

// Custom error
const {
  BadRequest,
  BadGateway,
  CustomError,
  Forbidden,
  MethodNotAllowed,
} = require('custom-error-service');

const app = express();
const port = 3000;

app.use((error, _request, response, next) => {
  if (response.headersSent) {
    return next(error);
  }

  const status = error.statusCode || 500;
  const message = error.message || 'Custom error sample.';
  const details = error.detail || '';
  console.log(error);

  response.status(status).json({
    success: false,
    status: 'error',
    code: status,
    message,
    details,
  });
});

app.get('/custom-error', (_request, response) => {
  const error = new CustomError(
    400,
    'Bad Request',
    'Custom error service for request',
  );

  response.status(error.statusCode).json({
    error,
  });
});

app.get('/bad-gateway', (_request, response) => {
  const error = new BadGateway();

  response.status(error.statusCode).json({
    error,
  });
});

app.get('/bad-request', (_request, response) => {
  const error = new BadRequest();

  response.status(error.statusCode).json({
    error,
  });
});

app.get('/forbidden', (_request, response) => {
  const error = new Forbidden();

  response.status(error.statusCode).json({
    error,
  });
});

app.get('/method-not-allowed', (_request, response) => {
  const error = new MethodNotAllowed();

  response.status(error.statusCode).json({
    error,
  });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
