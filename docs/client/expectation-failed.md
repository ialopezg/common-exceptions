## What does 417 Expectation Failed mean?

The `417 Expectation Failed` status code means that the Expectation indicated by the Expect request-header field could not be met by the server.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { ExpectationFailed } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/expectation-failed', (request, response) => {
  // Throw a new ExpectationFailed error with default parameters
  throw new ExpectationFailed();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
