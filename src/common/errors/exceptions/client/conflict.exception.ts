import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents an error when the request could not be fulfilled due to a conflict with the current state of the target resource and is used in situations where the user might be able to resubmit the request after resolving the conflict.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class ConflictException extends CustomError {
  /**
   * Creates a Conflict error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.CONFLICT, message, options);
  }
}
