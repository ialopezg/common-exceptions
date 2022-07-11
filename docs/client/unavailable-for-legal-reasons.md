## What does 451 Unavailable For Legal Reasons mean?

The `451 Unavailable For Legal Reasons` response code means that the user has requested an illegal resource (such as pages and sites blocked by the government).

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { UnavailableForLegalReasonsException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new UnavailableForLegalReasonsException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { UnavailableForLegalReasonsException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new UnavailableForLegalReasonsException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
