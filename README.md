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

## Tools

![VS Code](https://img.shields.io/badge/-VS%20Code-007ACC?style=plastic&logo=visual-studio-code)
![Shell](https://img.shields.io/badge/-Shell-blasck?style=plastic&logo=Shell)
![Git](https://img.shields.io/badge/-Git-black?style=plastic&logo=git)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=plastic&logo=github)
![Postman](https://img.shields.io/badge/-Postman-000000?style=plastic&logo=postman)
![Node.JS](https://img.shields.io/badge/-Node.JS-black?style=plastic&logo=Node.js)
![Express.JS](https://img.shields.io/badge/-Express.JS-black?style=plastic&logo=Express)

## Features ✨

> Custom Error Service, Modular Library used to fire errors and handle them, by properly response, while a request to API Rest or Database Server, and others scenarios.
> <br/>

| Status Code | Name                                                                 | Description                                                                                                                                                                                                                                          | Error Type |
| :---------- | :------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------- |
| 400         | [Bad Request](src/errors/client/bad_request.ts)                      | Represents a error when the server could not understand the request because of invalid syntax. [Example](#)                                                                                                                                          | Client     |
| 401         | [Unauthorized](src/errors/client/unauthorized.ts)                    | Represents a error when the request has not been applied because the server requires user authentication. [Example](#)                                                                                                                               | Client     |
| 402         | [Payment Required](src/errors/client/payment_required.ts)            | Represents a error when the request cannot be processed until the client makes a payment. [Example](#)                                                                                                                                               | Client     |
| 403         | [Forbiden](src/errors/client/forbidden.ts)                           | Represents a error when the client request has been rejected because the client does not have rights to access the content. [Example](#)                                                                                                             | Client     |
| 404         | [Not Found](src/errors/client/not_found.ts)                          | Represents a error when the server either did not find a current representation for the requested resource or is trying to hide its existence from an unauthorized client. [Example](#)                                                              | Client     |
| 404         | [Record Not Found](src/errors/client/record_not_found.ts)            | Represents a error when the server either did not find a current representation for the requested database entity or is trying to hide its existence from an unauthorized client. [Example](#)                                                       | Client     |
| 405         | [Method Not Allowed](src/errors/client/method_not_allowed.ts)        | Represents a error when the server knows the request method, the method has been disabled and can not be used. [Example](#)                                                                                                                          | Client     |
| 406         | [Not Acceptable](src/errors/client/not_acceptable.ts)                | Represents a error when the server when it does not find any content following the criteria given by the user agent. [Example](#)                                                                                                                    | Client     |
| 407         | [Proxy Authentication Required](src/errors/client/not_acceptable.ts) | Represents a error when the client must first be authenticated by a proxy (similar to a 401). <br/>This status is sent with a Proxy-Authenticate header that contains information on how to authorize correctly. [Example](#)                        | Client     |
| 408         | [Request Timeout](src/errors/client/request_timeout.ts)              | The server did not receive a complete request in the time that it prepared to wait. [Example](#)                                                                                                                                                     | Client     |
| 409         | [Conflict](src/errors/client/conflict.ts)                            | Represents a error when the request could not be fulfilled due to a conflict with the current state of the target resource and is used in situations where the user might be able to resubmit the request after resolving the conflict. [Example](#) | Client     |
| 500         | [Internal Server Error](src/errors/server/internal_server_error.ts)  | Represents a error when the server has encountered a situation that it does not know how to handle. [Example](#)                                                                                                                                     | Server     |

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
