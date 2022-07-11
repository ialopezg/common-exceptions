## What does 407 Proxy Authentication Required mean?

The `407 Proxy Authentication` Required status code means that the client must first be authenticated by a proxy (similar to a 401).

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { ProxyAuthenticationRequiredException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new ProxyAuthenticationRequiredException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { ProxyAuthenticationRequiredException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new ProxyAuthenticationRequiredException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
