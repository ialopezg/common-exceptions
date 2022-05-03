## What does 418 I’m a Teapot mean?

The `418 I'm a Teapot` status code means that the server refuses to brew coffee because it is, in fact, a teapot. (It is a reference to a 1998 April Fools' joke called ''Hyper Text Coffee Pot Control Protocol'').

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { ImATeapot } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/im-a-teapot', (request, response) => {
  // Throw a new ImATeapot error with default parameters
  throw new ImATeapot();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
