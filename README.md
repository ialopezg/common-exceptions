# Error Service
> Error Service for Database and HTTP Request Errors handling for handling HTTP Errors in several scenarios.

<p align="center">

[**Contact the developer**](mailto:me@ialopezg.com)
</p>

## Technology Stack

1. **[NodeJS](https://nodejs.org/en/)** with **[Express.js](http://expressjs.com/)** framework
2. **[TypeScript](https://www.typescriptlang.org/)**

## Requirements

- **yarn** v1.17+
- **NodeJS** v8+

## Installation

1. Clone this repository or

NPM
>`npm install --save custom-error-service`

Yarn
>`yarn add custom-error-service`

2. Install the dependencies by running `yarn` or `npm install`.

Optionally, you can run: `yarn lint` or` npm run lint` to check dependency and coding errors.

## Usage

### API Rest - App Entry Point
```javascript
const express = require('express');
const app = express();

app.use((error, request, response, next) => {
  if (response.headersSent) {
    return next(error);
  }

  const status = error.statusCode || 500;
  const message = error.message || "It's not you. It's us. We are having some problems.";
  const detail = error.detail || '';

  response.status(status).json({
    success: false,
    status: 'error',
    code: status,
    message,
    detail
  });
});
// Not found middleware. Declared after generic error
// middleware. This will allow use our custom middleware. 
app.use((request, response, next) => {
  response.status(404).send('Resource not found');
});
```
### 400 Custom Errors
```javascript
const CustomError = require('custom-error-service');

throw new CustomError.CustomError(statusCode, message, detail);
```

Parameters:
* **statusCode** [optional]: The HTTP Status code for response
* **message** [optional]: The message of this error
* **detail** [optional]: A detailed message of this error

### 400 Bad Request
```javacript
throw new CustomError.BadRequest(message, detail);
```

### 404 Not Found
```javascript
throw new CustomError.NotFound(message, detail);
```

### 404 Record or Entity Not Found
```javascript
throw new CustomError.RecordNotFound(id, message, detail);
```
Parameters:
* **id** [optional]: Entity id requested
* **message** [optional]: The message of this error
* **detail** [optional]: A detailed message of this error

## License

This project is under MIT license. Copyright ©  2019-2020 - [Isidro A. López G.](https://ialopezg.com).
