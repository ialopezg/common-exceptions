## What does 423 Locked mean?

The `423 Locked` status code means that the resource that is being accessed is locked.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { Locked } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/locked', (request, response) => {
  // Throw a new Locked error with default parameters
  throw new Locked();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
