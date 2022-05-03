## What does 400 Bad Request mean?

The `400 Bad Request` status code means that the server could not understand the request because of invalid syntax.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { BadRequest } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/bad-request', (request, response) => {
  // Throw a new BadRequest error with default parameters
  throw new BadRequest();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
