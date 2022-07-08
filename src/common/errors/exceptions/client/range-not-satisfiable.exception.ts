import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the range specified in the Range header field of the request can't be fulfilled. The reason might be that the given range is outside the size of the target URI's data.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class RangeNotSatisfiableException extends CustomError {
  /**
   * Creates a RangeNotSatisfiable error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(
      HttpStatus.RANGE_NOT_SATISFIABLE,
      message || 'Range Not Satisfiable',
      options,
    );

    // Additional error detail
    this.details = options?.details || {
      message:
        "The range specified in the Range header field of the request can't be fulfilled. The reason might be that the given range is outside the size of the target URI's data.",
    };
  }
}
