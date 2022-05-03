## What does 510 Not Extended mean?

The `510 Not Extended` response code means that further extensions are required for the server to be able to fulfil the request.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { NotExtended } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/not-extended', (request, response) => {
  // Throw a new NotExtended error with default parameters
  throw new NotExtended();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
