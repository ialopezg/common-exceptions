import { CustomError } from '../CustomError';

/**
 * Bad Request Error. The request cannot be fulfilled due to bad syntax.
 */
export class BadRequest extends CustomError {
  name = 'BadRequest';

  constructor(message?: string) {
    super(400, message || 'Bad Request');

    this.detail = 'The request could not be understood by the server due to malformed syntax.';
  }
}
