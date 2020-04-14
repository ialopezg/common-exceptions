import { CustomError } from '../CustomError';

/**
 * Not Implemented Error. The server does not support the functionality required to fulfill the request.
 */
export class NotImplemented extends CustomError {
  name = 'NotImplemented';

  constructor(message?: string, detail?: string, errorType?: string) {
    super(501, message || 'Not Implemented');

    // Error type
    this.errorType = errorType || `Application.${this.name}`;

    // Additional error detail
    this.detail = detail || 'The server does not support the functionality required to fulfill the request.';
  }
}
