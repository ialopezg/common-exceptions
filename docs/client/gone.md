## What does 410 Gone mean?

The `410 Gone` status code means that the target resource has been deleted and the condition seems to be permanent.

When looking at things SEO-wise the 410 Gone status code is a more permanent version a 404. The page will no longer be available from the server and has no forwarding address available. If you want to completely remove a page from Googles search index, then using 410 on a page is the proper way of doing it (instead of simply 404).

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { Gone } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/gone', (request, response) => {
  // Throw a new Gone error with default parameters
  throw new Gone();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
