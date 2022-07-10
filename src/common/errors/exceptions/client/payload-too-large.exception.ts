import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents an error when the server refuses to process the request because the request payload is larger than the server is able or willing to process. While the server may close the connection to prevent the client from continuing the request, it should generate a Retry-After header field and after how long can the client retry.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class PayloadTooLargeException extends CustomError {
  /**
   * Creates a PayloadTooLarge error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.PAYLOAD_TOO_LARGE, message, options);
  }
}
