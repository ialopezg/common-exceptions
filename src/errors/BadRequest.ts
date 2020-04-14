import { CustomError } from '../CustomError';

/**
 * BadRequest Error. The request cannot be fulfilled due to bad syntax.
 */
export class BadRequest extends CustomError {
  name = 'BadRequest';

  constructor(message?: string, detail?: string, errorType?: string) {
    super(400, message || 'Bad Request');

    // Error type
    this.errorType = errorType || `Application.${this.name}`;

    // Additional error detail
    this.detail = detail || 'The request cannot be fulfilled due to bad syntax.';
  }
}
