import { CustomError } from '../CustomError';

/**
 * ServerError. The server encountered an unexpected condition which prevented it from fulfilling the request.
 */
export class ServerError extends CustomError {
  name = 'ServerError';

  constructor(message?: string, detail?: string, errorType?: string) {
    super(500, message || 'Server Error');

    // Error type
    this.errorType = errorType || `Application.${this.name}`;

    // Additional error detail
    this.detail = detail || 'The server encountered an unexpected condition which prevented it from fulfilling the request.';
  }
}
