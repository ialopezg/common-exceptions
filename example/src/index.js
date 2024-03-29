const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const RateLimit = require('express-rate-limit');
const compression = require('compression');
const morgan = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Custom error
const {
  BadRequestException,
  BadGatewayException,
  ConflictException,
  CustomError,
  ErrorType,
  ForbiddenException,
  MethodNotAllowedException,
  NotFoundException,
} = require('custom-error-service');
const functions = require('./routes');

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

app.get('/custom-error', () => {
  throw new CustomError('Custom Error');
});

app.get('/bad-request', () => {
  throw new BadRequestException();
});

app.get('/conflict', () => {
  throw new ConflictException();
});

app.get('/not-found', () => {
  throw new NotFoundException();
});

app.get('/bad-gateway', () => {
  throw new BadGatewayException();
});

app.get('/forbidden', () => {
  throw new ForbiddenException();
});

app.get('/method-not-allowed', () => {
  throw new MethodNotAllowedException();
});

routes(app);

// Documentation
const options = {
  definition: {},
  apis: ['./routes/'],
};
const specs = swaggerJsDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

// Error handling
app.use((error, _request, response, next) => {
  if (response.headersSent) {
    return next(error);
  }

  response.status(error.getStatus()).json({
    success: false,
    status: 'error',
    message: error.getMessage(),
    errorType: ErrorType[error.errorType],
    details: error.details,
  });
});

function routes(app) {
  console.log(functions);
  app.use('/auth', require('./routes/auth.route'));
}

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
