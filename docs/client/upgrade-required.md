## What does 426 Upgrade Required mean?

The `426 Upgrade Required` status code means that while the server refuses to perform the given request using the current protocol, it might be willing to do so after the client has been upgraded to a different protocol.

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { UpgradeRequiredException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new UpgradeRequiredException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { UpgradeRequiredException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new UpgradeRequiredException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
