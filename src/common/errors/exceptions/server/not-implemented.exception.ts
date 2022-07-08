import { ErrorType, HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the request can not be handled because it is not supported by the server.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class NotImplementedException extends CustomError {
  /**
   * Creates a NotImplemented error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.NOT_IMPLEMENTED, message || 'Not Implemented', options);

    // Error type
    this.errorType = ErrorType.Server;
    // Additional error detail
    this.details = options?.details || {
      message:
        'The request can not be handled because it is not supported by the server.',
    };
  }
}
