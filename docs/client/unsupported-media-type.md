## What does 415 Unsupported Media Type mean?

The `415 Unsupported Media Type` status code means that the server is rejecting the request because it does not support the media format of the requested data.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { UnsupportedMediaType } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/unsupported-media-type', (request, response) => {
  // Throw a new UnsupportedMediaType error with default parameters
  throw new UnsupportedMediaType();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
