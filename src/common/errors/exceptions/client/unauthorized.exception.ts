import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the request has not been applied because the server requires user authentication.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class UnauthorizedException extends CustomError {
  /**
   * Creates a Unauthorized error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.UNAUTHORIZED, message || 'Unauthorized', options);

    // Additional error detail
    this.details = options?.details || {
      message:
        'The request has not been applied because the server requires user authentication.',
    };
  }
}
