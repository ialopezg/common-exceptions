import { CustomError } from '../CustomError';

/**
 * NotFound Error. The requested resource could not be found but may be available again in the future.
 */
export class NotFound extends CustomError {
  name = 'NotFoundError';

  constructor(message?: string, detail?: string, errorType?: string) {
    super(404, message || 'Not found');

    // Error type
    this.errorType = errorType || `Application.${this.name}`;

    // Additional error detail
    this.detail = detail || 'The requested resource could not be found but may be available again in the future.';
  }
}
