## What does 501 Not Implemented mean?

The `501 Not Implemented` response code means that the request can not be handled because it is not supported by the server.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { NotImplemented } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/not-implemented', (request, response) => {
  // Throw a new InternalServerError error with default parameters
  throw new NotImplemented();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
