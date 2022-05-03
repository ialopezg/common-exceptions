## What does 416 Range Not Satisfiable mean?

The `416 Range Not Satisfiable` status code means that the range specified in the Range header field of the request can't be fulfilled. The reason might be that the given range is outside the size of the target URI's data.

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { RangeNotSatisfiable } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/range-not-satisfiable', (request, response) => {
  // Throw a new RangeNotSatisfiable error with default parameters
  throw new RangeNotSatisfiable();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
