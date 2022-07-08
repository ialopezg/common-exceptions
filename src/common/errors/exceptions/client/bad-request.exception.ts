import { HttpStatus } from '../../../enums';
import { ErrorDetailInterface, ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the server could not understand the request because of invalid syntax.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class BadRequestException extends CustomError {
  /**
   * Creates a BadRequest error.
   * @constructor
   *
   * @param message Descriptive message.
   * @param options Additional error details.
   */
  constructor(message: string, options?: ExceptionOptions) {
    super(HttpStatus.BAD_REQUEST, message || 'Bad Request', options);

    // Additional error details
    this.details = options?.details || {
      errors: {
        message:
          'The server could not understand the request because of invalid syntax.',
      },
    };
  }
}
