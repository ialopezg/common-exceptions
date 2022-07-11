## What does 416 Range Not Satisfiable mean?

The `416 Range Not Satisfiable` status code means that the range specified in the Range header field of the request can't be fulfilled. The reason might be that the given range is outside the size of the target URI's data.

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { RangeNotSatisfiableException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new RangeNotSatisfiableException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { RangeNotSatisfiableException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new RangeNotSatisfiableException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
