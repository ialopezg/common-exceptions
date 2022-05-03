## What does 504 Gateway Timeout mean?

The `504 Gateway Timeout` response code means that the server acting as a gateway could not get a response time.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { GatewayTimeout } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/gateway-timeout', (request, response) => {
  // Throw a new GatewayTimeout error with default parameters
  throw new GatewayTimeout();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
