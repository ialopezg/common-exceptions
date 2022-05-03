## What does 402 Payment Required mean?

The `402 Payment Required` status code is a response reserved for future use. It was originally created to be implemented in digital payment systems, however, it is rarely used and a standard convention of using it does not exist.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { PaymentRequired } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/payment-required', (request, response) => {
  // Throw a new PaymentRequired error with default parameters
  throw new PaymentRequired();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
