import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error while the request was well-formed, the server was unable to follow it, due to semantic errors.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class UnprocessableEntityException extends CustomError {
  /**
   * Creates a UnprocessableEntity error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(
      HttpStatus.UNPROCESSABLE_ENTITY,
      message || 'Unprocessable Entity',
      options,
    );

    // Additional error detail
    this.details = options?.details || {
      message:
        'While the request was well-formed, the server was unable to follow it, due to semantic errors.',
    };
  }
}
