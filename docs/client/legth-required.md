## What does 411 Length Required mean?

The `411 Length Required` status code means that the server has rejected the request because it requires the Content-Length header field to be defined.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { LengthRequired } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/length-required', (request, response) => {
  // Throw a new LengthRequired error with default parameters
  throw new LengthRequired();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
