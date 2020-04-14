import { CustomError } from '../CustomError';

/**
 * Unauthorized Error. The request could not be processed because of conflict in the request.
 */
export class Unauthorized extends CustomError {
  name = 'Unauthorized';

  constructor(message?: string, detail?: string, errorType?: string) {
    super(401, message || 'Unauthorized');

    // Error type
    this.errorType = errorType || `Application.${this.name}`;

    // Additional error detail
    this.detail = detail || 'The request requires user authentication.';
  }
}
