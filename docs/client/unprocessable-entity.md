## What does 422 Unprocessable Entity mean?

The `422 Unprocessable Entity` status code means that while the request was well-formed, the server was unable to follow it, due to semantic errors.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { UnprocessableEntity } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/unprocessable-entity', (request, response) => {
  // Throw a new UnprocessableEntity error with default parameters
  throw new UnprocessableEntity();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
