import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the origin server requires the request to be conditional.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class PreconditionRequiredException extends CustomError {
  /**
   * Creates a PreconditionRequired error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(
      HttpStatus.PRECONDITION_REQUIRED,
      message || 'Precondition Required',
      options,
    );

    // Additional error detail
    this.details = options?.details || {
      message: 'The origin server requires the request to be conditional.',
    };
  }
}
