## What does 401 Unauthorized mean?

The `401 Unauthorized` status code means that the request has not been applied because the server requires user authentication.

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { UnauthorizedException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new UnauthorizedException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { UnauthorizedException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new UnauthorizedException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
