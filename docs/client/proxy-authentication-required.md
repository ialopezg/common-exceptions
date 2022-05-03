## What does 407 Proxy Authentication Required mean?

The `407 Proxy Authentication` Required status code means that the client must first be authenticated by a proxy (similar to a 401).

## Parameters

- `message` [optional]: The representative message for this error.
- `details` [optional]: A detailed message of this error.

## Example

```javascript
import { ProxyAuthenticationRequired } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/proxy-authentication-required', (request, response) => {
  // Throw a new ProxyAuthenticationRequired error with default parameters
  throw new ProxyAuthenticationRequired();
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. López G.](https://ialopezg.com/)
