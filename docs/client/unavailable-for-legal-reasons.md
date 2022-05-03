## What does 451 Unavailable For Legal Reasons mean?

The `451 Unavailable For Legal Reasons` response code means that the user has requested an illegal resource (such as pages and sites blocked by the government).

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { UnavailableForLegalReasons } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/unavailable-for-legal-reasons', (request, response) => {
  // Throw a new UnavailableForLegalReasons error with default parameters
  throw new UnavailableForLegalReasons();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
