import { CustomError } from '../CustomError';

/**
 * BadGateway Error. The server, while acting as a gateway or proxy, received an invalid response.
 */
export class BadGateway extends CustomError {
  name = 'BadGateway';

  constructor(message?: string, detail?: string, errorType?: string) {
    super(502, message || 'Bad Gateway');

    // Error type
    this.errorType = errorType || `Application.${this.name}`;

    // Additional error detail
    this.detail =
      detail ||
      'The server was acting as a gateway or proxy and received an invalid.';
  }
}
