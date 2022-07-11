## What does Custom Error mean?

The `Custom Error` means that the server could not resolve the request, current request state is unknown, and probably assistance and technical support is required.

## Parameters


| Field     | Type                                                             | Description                                | Default     |
|-----------|------------------------------------------------------------------|--------------------------------------------|-------------|
| `status`  | [HttpStatus](../enums/http-status.enum.md)                       | HTTP status code.                          | BAD_REQUEST |
| `message` | string                                                           | The representative message for this error. | empty       |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |             |

## Example

```javascript
const express = require('express');
const app = express();
const { HttpStatus } = require('custom-error-service');

app.get('/custom-error', (request, response) => {
  try {
    throw new CustomError();
  } catch (error) {
    next(error);
  }
});

app.use((error, request, response, next) => {
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

// Not found middleware. Declared after generic error
// middleware. This will allow use our custom middleware.
app.use((request, response, next) => {
  response.status(Httpstatus.NOT_FOUND).send('Resource not found');
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
