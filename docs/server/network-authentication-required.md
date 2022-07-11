## What does 511 Network Authentication Required mean?

The `511 Network Authentication Required` response code indicates that the client needs to authenticate to gain network access.

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { NetworkAuthenticationRequiredException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new NetworkAuthenticationRequiredException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { NetworkAuthenticationRequiredException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new NetworkAuthenticationRequiredException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
