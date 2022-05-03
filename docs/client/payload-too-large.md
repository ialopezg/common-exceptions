## What does 413 Payload Too Large mean?

The `413 Payload Too Large` status code means the server refuses to process the request because the request payload is larger than the server is able or willing to process. While the server may close the connection to prevent the client from continuing the request, it should generate a Retry-After header field and after how long can the client retry.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { PayloadToLarge } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/payload-too-large', (request, response) => {
  // Throw a new PayloadToLarge error with default parameters
  throw new PayloadToLarge();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
