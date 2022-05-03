## What does 505 HTTP Version Not Supported mean?

The `505 HTTP Version Not Supported` response code means that the version of HTTP used in the request is not supported by the server.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { HTTPVersionNotSupported } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/http-version-not-supported', (request, response) => {
  // Throw a new HTTPVersionNotSupported error with default parameters
  throw new HTTPVersionNotSupported();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
