const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const RateLimit = require('express-rate-limit');
const compression = require('compression');
const morgan = require('morgan');

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

// API Deployment
app.set('trust proxy');
// API Security
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(
  RateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
  }),
);
// API Utilities
app.use(compression());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.get('/custom-error', (_request, _response) => {
  throw new CustomError('Custom Error');
});

app.get('/bad-request', (_request, _response) => {
  throw new BadRequest();
});

app.get('/bad-gateway', (_request, _response) => {
  throw new BadGateway();
});

app.get('/forbidden', (_request, _response) => {
  throw new Forbidden();
});

app.get('/method-not-allowed', (_request, _response) => {
  throw new MethodNotAllowed();
});

// Error handling
app.use((error, _request, response, next) => {
  if (response.headersSent) {
    return next(error);
  }

  const status = error.statusCode || 400;
  response.status(status).json({
    success: false,
    status: 'error',
    message: error.message ?? 'Custom error sample.',
    errorCode: status,
    errorName: error.name,
    errorType: error.errorType,
    details: error.details ?? '',
  });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
