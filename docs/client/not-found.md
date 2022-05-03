## What does error 404 Not Found mean?

The `404 Not Found` status code means that the server either did not find a current representation for the requested resource or is trying to hide its existence from an unauthorized client.

When looking at things SEO-wise the 404 Not Found status code pages with a high volume of traffic should be redirected using a 301 to the most relevant page possible. For some pages, however, a 404 might be necessary, for example, if the product is out of stock for an extended period of time. If you have external links pointing to a page that returns 404, you will lose the link equity those links would otherwise give.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { NotFound } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/not-found', (request, response) => {
  // Throw a new NotFound error with default parameters
  throw new NotFound();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
