import { ErrorType, HttpStatus } from '../../../enums';
import { ErrorDetailInterface, ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the server has encountered a situation that it does not know how to handle.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class InternalServerErrorException extends CustomError {
  /**
   * Creates a InternalServerError error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(
      HttpStatus.INTERNAL_SERVER_ERROR,
      message || 'Internal Server Error',
      options,
    );

    // Error type
    this.errorType = ErrorType.Server;
    // Additional error detail
    this.details = options?.details || {
      message:
        'The server has encountered a situation that it does not know how to handle.',
    };
  }
}
