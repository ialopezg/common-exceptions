## What does 422 Unprocessable Entity mean?

The `422 Unprocessable Entity` status code means that while the request was well-formed, the server was unable to follow it, due to semantic errors.

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { UnprocessableEntityException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new UnprocessableEntityException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { UnprocessableEntityException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new UnprocessableEntityException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
