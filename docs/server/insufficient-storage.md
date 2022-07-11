## What does 507 Insufficient Storage mean?

The `507 Insufficient Storage` status code means that the method could not be performed on the resource because the server is not able to store the representation that would be needed to complete the request successfully.

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { InsufficientStorageException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new InsufficientStorageException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { InsufficientStorageException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new InsufficientStorageException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
