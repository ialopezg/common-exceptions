import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the server does not meet one or multiple preconditions that were indicated in the request header fields.s
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class PreconditionFailedException extends CustomError {
  /**
   * Creates a Unauthorized error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(
      HttpStatus.PRECONDITION_REQUIRED,
      message || 'Precondition Failed',
      options,
    );

    // Additional error detail
    this.details = options?.details || {
      message:
        'The server does not meet one or multiple preconditions that were indicated in the request header fields.',
    };
  }
}
