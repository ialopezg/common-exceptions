## What does 505 HTTP Version Not Supported mean?

The `505 HTTP Version Not Supported` response code means that the version of HTTP used in the request is not supported by the server.

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { HttpVersionNotSupportedException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new HttpVersionNotSupportedException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { HttpVersionNotSupportedException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new HttpVersionNotSupportedException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
