import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the server did not receive a complete request in the time that it prepared to wait.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class RequestTimeoutException extends CustomError {
  /**
   * Creates a RequestTimeout error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.REQUEST_TIMEOUT, message || 'Request Timeout', options);

    // Additional error detail
    this.details = options?.details || {
      message:
        'The server did not receive a complete request in the time that it prepared to wait.',
    };
  }
}
