import { ErrorType, HttpStatus } from '../../../enums';
import { ErrorDetailInterface, ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents an error where further extensions are required for the server to be able to fulfil the request.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class NotExtendedException extends CustomError {
  /**
   * Creates a NotExtended error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.NOT_EXTENDED, message || 'Not Extended', options);

    // Error type
    this.errorType = ErrorType.Server;
    // Additional error details
    this.details = options?.details || {
      message:
        'Further extensions are required for the server to be able to fulfil the request.',
    };
  }
}
