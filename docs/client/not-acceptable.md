## What does 406 Not Acceptable mean?

The `406 Not Acceptable` status code is sent by the server when it does not find any content following the criteria given by the user agent.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { NotAcceptable } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/not-acceptable', (request, response) => {
  // Throw a new NotAcceptable error with default parameters
  throw new NotAcceptable();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
