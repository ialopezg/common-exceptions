## What does 426 Upgrade Required mean?

The `426 Upgrade Required` status code means that while the server refuses to perform the given request using the current protocol, it might be willing to do so after the client has been upgraded to a different protocol.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { UpgradeRequired } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/upgrade-required', (request, response) => {
  // Throw a new UpgradeRequired error with default parameters
  throw new UpgradeRequired();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
