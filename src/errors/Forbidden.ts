import { CustomError } from '../CustomError';

/**
 * Forbidden Error. The server understood the request, but is refusing to fulfill it.
 */
export class Forbidden extends CustomError {
  name = 'Forbidden';

  constructor(message?: string, detail?: string, errorType?: string) {
    super(403, message || 'Forbidden');

    // Error type
    this.errorType = errorType || `Application.${this.name}`;

    // Additional error detail
    this.detail = detail || 'The server understood the request, but is refusing to fulfill it.';
  }
}
