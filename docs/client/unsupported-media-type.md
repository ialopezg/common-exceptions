## What does 415 Unsupported Media Type mean?

The `415 Unsupported Media Type` status code means that the server is rejecting the request because it does not support the media format of the requested data.

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { UnsupportedMediaTypeException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new UnsupportedMediaTypeException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { UnsupportedMediaTypeException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new UnsupportedMediaTypeException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
