## What does 425 Too Early mean?

The `425 Too Early` status code means that the server is not willing to risk processing a request that might be replayed.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { TooEarly } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/too-early', (request, response) => {
  // Throw a new TooEarly error with default parameters
  throw new TooEarly();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
