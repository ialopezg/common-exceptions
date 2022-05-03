## What does 405 Method Not Allowed mean?

The `405 Method Not Allowed` status code means that while the server knows the request method, the method has been disabled and can not be used.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { MethodNotAllowed } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/method-not-allowed', (request, response) => {
  // Throw a new MethodNotAllowed error with default parameters
  throw new MethodNotAllowed();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
