import { CustomError } from '../CustomError';

/**
 * Bad Request Error. The request cannot be fulfilled due to bad syntax.
 */
export class BadRequest extends CustomError {
  name = 'BadRequest';

  constructor(message?: string, detail?: string, errorType?: string) {
    super(400, message || 'Bad Request');

    // Error type
    this.errorType = errorType || 'Application.BadRequest';

    // Additional error detail
    this.detail = detail || 'The request could not be understood by the server due to malformed syntax.';
  }
}
