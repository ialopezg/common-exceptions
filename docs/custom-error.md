## What does Custom Error mean?

The `Custom Error` means that the server could not resolve the request, current request state is unknown, and probably assistance and technical support is required.

## Parameters

- `statusCode` [optional]: Default `400`. HTTP status code.
- `message` [optional]: The representative message for this error.
- `errorType` [optional]: Default `Client`. Error type, possible value Client and Server.
- `isPublic` [optional]: Default `true`. Whether if error will be displayed to user.
- `isOperational` [optional]: Default `true`. Whether is current error must close the app.
- `details` [optional]: A detailed message of this error.
- `stack` [optional]: Error stack.

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

  const status = error.status || 500;
  const message =
    error.message || "It's not you. It's us. We are having some problems.";
  const details = error.details || '';

  response.status(status).json({
    success: false,
    sstatus,
    message,
    details,
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
