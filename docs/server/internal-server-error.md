## What does 500 Internal Server Error mean?

The `500 Internal Server Error` status code means that the server has encountered a situation that it does not know how to handle.

When looking at things SEO-wise the 500 Internal Server Error indicates a problem with the server, not the actual availability of the content. Since bots and users will both be lost, the link equity will go down fast.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { InternalServerError } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/internal-server-error', (request, response) => {
  // Throw a new InternalServerError error with default parameters
  throw new InternalServerError();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
