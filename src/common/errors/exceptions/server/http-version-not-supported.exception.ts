import { ErrorType, HttpStatus } from '../../../enums';
import { ErrorDetailInterface, ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the version of HTTP used in the request is not supported by the server.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class HttpVersionNotSupportedException extends CustomError {
  /**
   * Creates a HttpVersionNotSupported error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(
      HttpStatus.HTTP_VERSION_NOT_SUPPORTED,
      message || 'HTTP Version Not Supported',
      options,
    );

    // Error type
    this.errorType = ErrorType.Server;
    // Additional error details
    this.details = options?.details || {
      message:
        'The version of HTTP used in the request is not supported by the server.',
    };
  }
}
