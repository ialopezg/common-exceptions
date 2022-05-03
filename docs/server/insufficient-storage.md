## What does 507 Insufficient Storage mean?

The `507 Insufficient Storage` status code means that the method could not be performed on the resource because the server is not able to store the representation that would be needed to complete the request successfully.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { InsufficientStorage } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/insufficient-storage', (request, response) => {
  // Throw a new InsufficientStorage error with default parameters
  throw new InsufficientStorage();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
