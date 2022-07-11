## What does 506 Variant Also Negotiates mean?

The `506 Variant Also Negotiates` response code means that the server has the following internal configuration error: The chosen variant resource is configured to engage in transparent negotiation itself, therefore it cannot be a proper endpoint in the negotiation process.

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { VariantAlsoNegotiatesException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new VariantAlsoNegotiatesException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { VariantAlsoNegotiatesException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new VariantAlsoNegotiatesException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
