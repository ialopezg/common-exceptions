## What does 508 Loop Detected mean?

The `508 Loop Detected` response code means that the server has detected an infinite loop while processing the request.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { LoopDetected } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/loop-detected', (request, response) => {
  // Throw a new LoopDetected error with default parameters
  throw new LoopDetected();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
