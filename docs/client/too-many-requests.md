## What does 429 Too Many Requests mean?

The `429 Too Many Requests` response code means that in the given time, the user has sent too many requests.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { TooManyRequests } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/too-many-requests', (request, response) => {
  // Throw a new TooManyRequests error with default parameters
  throw new TooManyRequests();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
