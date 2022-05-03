## What does 421 Misdirected Request mean?

The` 421 Misdirected Request` status code means that the client request was directed at a server that is not configured to produce a response.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { MisdirectedRequest } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/misdirected-request', (request, response) => {
  // Throw a new MisdirectedRequest error with default parameters
  throw new MisdirectedRequest();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
