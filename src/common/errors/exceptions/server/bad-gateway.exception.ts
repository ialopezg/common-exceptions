import { ErrorType, HttpStatus } from '../../../enums';
import { ErrorDetailInterface, ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the server received an invalid response while working as a gateway to handle the response.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class BadGatewayException extends CustomError {
  /**
   * Creates a BadGateway error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.BAD_GATEWAY, message || 'Bad Gateway', options);

    // Error type
    this.errorType = ErrorType.Server;
    // Additional error details
    this.details = options?.details || {
      message:
        'The server received an invalid response while working as a gateway to handle the response.',
    };
  }
}
