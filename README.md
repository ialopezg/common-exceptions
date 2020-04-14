# Custom Error Service

> <div align="center"><a href="https://www.paypal.me/isidrolopezg">Buy me a ☕️<br/><img src="https://img.shields.io/badge/Donate-PayPal-green.svg" alt="donate"></a></div>

[![Build Status][travis-image]][travis-url]
[![Build Status][travis-image-windows]][travis-url]
[![Build Status][travis-image-osx]][travis-url]
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

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
`npm install --save custom-error-service`

Yarn
`yarn add custom-error-service`

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

This project is under [MIT](LICENSE). Copyright ©  2019-2020 - [Isidro A. López G.](https://ialopezg.com).

[npm-image]: https://img.shields.io/npm/v/custom-error-service.svg
[npm-url]: https://npmjs.org/package/custom-error-service
[downloads-image]: https://img.shields.io/npm/dm/custom-error-service.svg
[downloads-url]: https://npmcharts.com/compare/express?minimal=true
[travis-image]: https://img.shields.io/travis/ialopezg/custom-error-service/master.svg?label=linux
[travis-image-osx]: https://img.shields.io/travis/ialopezg/custom-error-service/master.svg?label=osx
[travis-image-windows]: https://img.shields.io/travis/ialopezg/custom-error-service/master.svg?label=windows
[travis-url]: https://travis-ci.org/ialopezg/custom-error-service
