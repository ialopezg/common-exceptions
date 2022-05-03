## What does 502 Bad Gateway mean?

The `502 Bad Gateway` response code means that the server received an invalid response while working as a gateway to handle the response.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { BadGateway } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/bad-gateway', (request, response) => {
  // Throw a new BadGateway error with default parameters
  throw new BadGateway();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
