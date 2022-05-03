## What does 403 Forbidden mean?

The `403 Forbidden` status code means that the client request has been rejected because the client does not have rights to access the content. Unlike a 401 error, the client's identity is known to the server, but since they are not authorized to view the content, giving the proper response is rejected by the server.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { Forbidden } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/forbidden', (request, response) => {
  // Throw a new Forbidden error with default parameters
  throw new Forbidden();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
