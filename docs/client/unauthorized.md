## What does 401 Unauthorized mean?

The `401 Unauthorized` status code means that the request has not been applied because the server requires user authentication.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { Unauthorized } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/unauthorized', (request, response) => {
  // Throw a new Unauthorized error with default parameters
  throw new Unauthorized();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
