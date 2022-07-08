import { ErrorType, HttpStatus } from '../../../enums';
import { ErrorDetailInterface, ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the method could not be performed on the resource because the
 * server is not able to store the representation that would be needed to complete the
 * request successfully.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class InsufficientStorageException extends CustomError {
  /**
   * Creates a InsufficientStorage error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(
      HttpStatus.INSUFFICIENT_STORAGE,
      message || 'Insufficient Storage',
      options,
    );

    // Error type
    this.errorType = ErrorType.Server;
    // Additional error details
    this.details = options?.details || {
      message:
        'The method could not be performed on the resource because the server is not able to store the representation that would be needed to complete the request successfully.',
    };
  }
}
