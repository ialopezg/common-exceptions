import { ErrorType, HttpStatus } from '../../../enums';
import { ErrorDetailInterface, ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents an error when the client needs to authenticate to gain network access.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class NetworkAuthenticationRequiredException extends CustomError {
  /**
   * Creates a NetworkAuthenticationRequired error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(
      HttpStatus.NETWORK_AUTHENTICATION_REQUIRED,
      message || 'Network Authentication Required',
      options,
    );

    // Error type
    this.errorType = ErrorType.Server;
    // Additional error details
    this.details = options?.details || {
      message: 'The client needs to authenticate to gain network access.',
    };
  }
}
