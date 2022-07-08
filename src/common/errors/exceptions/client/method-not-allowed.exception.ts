import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the server knows the request method, the method has been disabled and can not be used.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class MethodNotAllowedException extends CustomError {
  /**
   * Creates a MethodNotAllowed error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(
      HttpStatus.METHOD_NOT_ALLOWED,
      message || 'Method Not Allowed',
      options,
    );

    // Additional error details
    this.details = options?.details || {
      message:
        'The server knows the requested method, the method has been disabled and cannot be used',
    };
  }
}
