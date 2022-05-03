## What does 408 Request Timeout mean?

The `408 Request Timeout` status code means that the server did not receive a complete request in the time that it prepared to wait.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { RequestTimeout } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/request-imeout', (request, response) => {
  // Throw a new RequestTimeout error with default parameters
  throw new RequestTimeout();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
