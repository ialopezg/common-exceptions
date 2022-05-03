## What does 506 Variant Also Negotiates mean?

The `506 Variant Also Negotiates` response code means that the server has the following internal configuration error: The chosen variant resource is configured to engage in transparent negotiation itself, therefore it cannot be a proper endpoint in the negotiation process.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { VariantAlsoNegotiates } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/variant-also-negotiates', (request, response) => {
  // Throw a new VariantAlsoNegotiates error with default parameters
  throw new VariantAlsoNegotiates();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
