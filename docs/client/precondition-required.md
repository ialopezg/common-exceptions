## What does 428 Precondition Required mean?

The `428 Precondition Required` status code means that the origin server requires the request to be conditional.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { PreconditionRequired } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/precondition-required', (request, response) => {
  // Throw a new PreconditionRequired error with default parameters
  throw new PreconditionRequired();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
