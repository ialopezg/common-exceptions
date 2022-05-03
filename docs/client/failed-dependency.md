## What does 424 Failed Dependency mean?

The `424 Failed Dependency` status code means that the request failed due to the failure of a previous request.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { FailedDependency } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/failed-dependency', (request, response) => {
  // Throw a new FailedDependency error with default parameters
  throw new FailedDependency();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
