## Exception Options

Adds more details to a HttpException based object.

## Parameters

| Field           | Type                                     | Description                                                    | Default |
|:----------------|:-----------------------------------------|:---------------------------------------------------------------|:--------|
| `isPublic`      | boolean                                  | `Optional`. Whether error is public and displayed to the user. | true    |
| `isOperational` | boolean                                  | `Optional`. Whether error will not stop the application.       | true    |
| `errorType`     | [ErrorType](../enums/error-type.enum.md) | `Readonly`. Acceptable values: Server, Client.                 | Client  |
| `details`       | object                                   | `Optional`. Additional error details.                          |         |

## Example

  ```typescript
import { CustomError, ErrorType, ExceptionOptions } from 'custom-error-service';

const options: ExceptionOptions = {
    isPublic: false,
    isOperational: true,
    errorType: ErrorType.Client,
    details: {
      message: 'Error Test',
      path: 'error.test',
    },
};

const error = new CustomError(HttpStatus.BAD_REQUEST, 'Error Test', options);
```

---

&copy; Copyright 2019-present - Customer Error Service by [Isidro A. Lopez G.](https://ialopezg.com/)
