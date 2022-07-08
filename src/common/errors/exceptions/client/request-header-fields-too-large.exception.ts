import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the server is not willing to process the request because its header fields are indeed too large, however, the request may be submitted again once the size of the request header fields is reduced.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class RequestHeaderFieldsTooLargeException extends CustomError {
  /**
   * Creates a RequestHeaderFieldsTooLarge error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(
      HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE,
      message || 'Request Header Fields Too Large',
      options,
    );

    // Additional error detail
    this.details = options || {
      message:
        'The server is not willing to process the request because its header fields are indeed too large, however, the request may be submitted again once the size of the request header fields is reduced.',
    };
  }
}
