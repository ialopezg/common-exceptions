## What does error 404 Not Found mean?

The `404 Not Found` status code means that the server either did not find a current representation for the requested resource or is trying to hide its existence from an unauthorized client.

When looking at things SEO-wise the 404 Not Found status code pages with a high volume of traffic should be redirected using a 301 to the most relevant page possible. For some pages, however, a 404 might be necessary, for example, if the product is out of stock for an extended period of time. If you have external links pointing to a page that returns 404, you will lose the link equity those links would otherwise give.

## Parameters

| Field     | Type                                                             | Description                                | Default |
|-----------|------------------------------------------------------------------|--------------------------------------------|---------|
| `message` | string                                                           | The representative message for this error. | empty   |
| `options` | [ExceptionOptions](../interfaces/exception-options.interface.md) | A detailed message of this error           |         |

## Examples

### Without arguments

```typescript
import { NotFoundException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new NotFoundException();
  } catch (error) {
    handleError(error);
  }
});
```

### With arguments

```typescript
import { NotFoundException } from 'custom-error-service';
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  try {
    throw new NotFoundException('Test Error');
  } catch (error) {
    handleError(error);
  }
});
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
