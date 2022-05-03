## What does 412 Precondition Failed mean?

The `412 Precondition` Failed status code means the server does not meet one or multiple preconditions that were indicated in the request header fields.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { PreconditionFailed } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/precondition-failed', (request, response) => {
  // Throw a new PreconditionFailed error with default parameters
  throw new PreconditionFailed();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
