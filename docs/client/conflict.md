## What does 409 Conflict mean?

The `409 Conflict` status code means that the request could not be fulfilled due to a conflict with the current state of the target resource and is used in situations where the user might be able to resubmit the request after resolving the conflict.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { Conflict } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/conflict', (request, response) => {
  // Throw a new Conflict error with default parameters
  throw new Conflict();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
