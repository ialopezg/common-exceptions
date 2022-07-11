## What does 403 Forbidden mean?

The `403 Forbidden` status code means that the client request has been rejected because the client does not have rights to access the content. Unlike a 401 error, the client's identity is known to the server, but since they are not authorized to view the content, giving the proper response is rejected by the server.

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { ForbiddenException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new ForbiddenException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { ForbiddenException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new ForbiddenException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
