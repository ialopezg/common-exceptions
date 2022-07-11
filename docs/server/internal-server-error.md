## What does 500 Internal Server Error mean?

The `500 Internal Server Error` status code means that the server has encountered a situation that it does not know how to handle.

When looking at things SEO-wise the 500 Internal Server Error indicates a problem with the server, not the actual availability of the content. Since bots and users will both be lost, the link equity will go down fast.

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { InternalServerErrorException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new InternalServerErrorException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { InternalServerErrorException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new InternalServerErrorException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
