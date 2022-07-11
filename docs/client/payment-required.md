## What does 402 Payment Required mean?

The `402 Payment Required` status code is a response reserved for future use. It was originally created to be implemented in digital payment systems, however, it is rarely used and a standard convention of using it does not exist.

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { PaymentRequiredException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new PaymentRequiredException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { PaymentRequiredException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new PaymentRequiredException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
