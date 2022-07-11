## What does 503 Service Unavailable mean?

The `503 Service Unavailable` response code means that the server is currently not ready to handle the request. This is a common occurrence when the server is down for maintenance or is overloaded.

When looking at things SEO-wise the 503 Service Unavailable status code means that the server is unavailable and the visitor, bot or human, is asked to return again at a later time. This could be because of either server maintenance or server overload and search engines know to come back and check the availability later.

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { ServiceUnavailableException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new ServiceUnavailableException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { ServiceUnavailableException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new ServiceUnavailableException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
