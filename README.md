<div align="center">
  <h1>Custom Error Service</h1>
</div>
<div align="center">
  <strong>A toolset for NodeJS to handling Client and Server Side HTTP errors</strong>
</div>
<br />

<div align="center">
  <a href="https://www.paypal.me/isidrolopezg">Buy me a ☕️<br/><img src="https://img.shields.io/badge/Donate-PayPal-green" alt="donate"></a>
</div>

[![Build Status][travis-image]][travis-url]
[![Build Status][travis-image-windows]][travis-url]
[![Build Status][travis-image-osx]][travis-url]
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![All Contributors][contributors]][contributors-link]

## Technology Stack

##@ Tools

![VS Code](https://img.shields.io/badge/-VS%20Code-007ACC?style=plastic&logo=visual-studio-code)
![Shell](https://img.shields.io/badge/-Shell-blasck?style=plastic&logo=Shell)
![Git](https://img.shields.io/badge/-Git-black?style=plastic&logo=git)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=plastic&logo=github)
![Postman](https://img.shields.io/badge/-Postman-000000?style=plastic&logo=postman)
![Node.JS](https://img.shields.io/badge/-Node.JS-black?style=plastic&logo=Node.js)
![Express.JS](https://img.shields.io/badge/-Express.JS-black?style=plastic&logo=Express)

### Languages

![TypeScript](https://img.shields.io/badge/-TypeScript-000000?style=flat&logo=typescript)
![JavaScript](https://img.shields.io/badge/-JavaScript-000000?style=flat&logo=javascript)

## Documentation

- [English](docs/index.md) Documentation

## Requirements

- **yarn** v1.17+
- **NodeJS** v8+

## Installation

- You have three options to install this repository.

  1. Clone this repository from GitHub
     ```sh
     git clone https://github.com/ialopezg/custom-error-service.git
     ```
  2. **NPM**:
     ```sh
     npm install --save custom-error-service
     ```
  3. **Yarn**:
     ```sh
     yarn add custom-error-service
     ```

- Install the dependencies by running `yarn` or `npm install`.

Optionally, you can run: `yarn lint` or`npm run lint` to check dependency and coding errors.

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
  const message =
    error.message || "It's not you. It's us. We are having some problems.";
  const detail = error.detail || '';

  response.status(status).json({
    success: false,
    status: 'error',
    code: status,
    message,
    detail,
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
const { CustomError } = require('custom-error-service');

throw new CustomError(statusCode, message, detail);
```

Parameters:

- **statusCode** [optional]: The HTTP Status code for response. Default value: 400
- **message** [optional]: The message of this error
- **detail** [optional]: A detailed message of this error

### 400 Bad Request

```javacript
throw new BadRequest(message, detail);
```

### 401 Unauthorized

```javascript
throw new Unauthorized(message, detail);
```

Parameters:

- **message** [optional]: The message of this error
- **detail** [optional]: A detailed message of this error

### 404 Not Found

```javascript
throw new NotFound(message, detail);
```

### 404 Record or Entity Not Found

```javascript
throw new RecordNotFound(id, message, detail);
```

Parameters:

- **id** [optional]: Entity id requested
- **message** [optional]: The message of this error
- **detail** [optional]: A detailed message of this error

### 503 Service Unavailable

```javascript
throw new ServiceUnavailable(message, detail);
```

Parameters:

- **message** [optional]: The message of this error
- **detail** [optional]: A detailed message of this error

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ialopezg"><img src="https://avatars.githubusercontent.com/u/6828828?s=100&v=4" width="100px;" alt="Isidro A. López G."/><br /><sub><b>Isidro A. López G.</b></sub></a><br /><a href="https://github.com/ialopezg/boilerplate/issues?q=author%3Aialopezg" title="Bug reports">🐛</a></td>
  </tr>
</table>

---

## License

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)

[npm-image]: https://img.shields.io/npm/v/custom-error-service.svg
[npm-url]: https://npmjs.org/package/custom-error-service
[downloads-image]: https://img.shields.io/npm/dm/custom-error-service.svg
[downloads-url]: https://npmcharts.com/compare/express?minimal=true
[travis-image]: https://img.shields.io/travis/ialopezg/custom-error-service/master.svg?label=linux
[travis-image-osx]: https://img.shields.io/travis/ialopezg/custom-error-service/master.svg?label=osx
[travis-image-windows]: https://img.shields.io/travis/ialopezg/custom-error-service/master.svg?label=windows
[travis-url]: https://travis-ci.org/ialopezg/custom-error-service
[contributors]: https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square
[contributors-link]: #contributors
