## What does 414 URI Too Long mean?

The `414 URI Too Long` status code means that the server is refusing to service the request because the request-target was longer than the server was willing to interpret.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { URITooLong } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/uri-too-long', (request, response) => {
  // Throw a new URITooLong error with default parameters
  throw new URITooLong();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
