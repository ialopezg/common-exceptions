## What does 511 Network Authentication Required mean?

The `511 Network Authentication Required` response code indicates that the client needs to authenticate to gain network access.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { NetworkAuthenticationRequired } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/network-authentication-required', (request, response) => {
  // Throw a new NetworkAuthenticationRequired error with default parameters
  throw new NetworkAuthenticationRequired();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
