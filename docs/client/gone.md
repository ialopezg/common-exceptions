## What does 410 Gone mean?

The `410 Gone` status code means that the target resource has been deleted and the condition seems to be permanent.

When looking at things SEO-wise the 410 Gone status code is a more permanent version a 404. The page will no longer be available from the server and has no forwarding address available. If you want to completely remove a page from Googles search index, then using 410 on a page is the proper way of doing it (instead of simply 404).

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { GoneException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new GoneException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { GoneException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new GoneException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
