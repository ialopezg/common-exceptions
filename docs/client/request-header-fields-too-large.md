## What does 431 Request Header Fields Too Large mean?

The `431 Request Header Fields Too Large` means that the server is not willing to process the request because its header fields are indeed too large, however, the request may be submitted again once the size of the request header fields is reduced.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { RequestHeaderFieldsTooLarge } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/request-header-fields-too-large', (request, response) => {
  // Throw a new RequestHeaderFieldsTooLarge error with default parameters
  throw new RequestHeaderFieldsTooLarge();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
