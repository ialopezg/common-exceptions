import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents an error when the method could not be performed on the resource because the
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
    super(HttpStatus.INSUFFICIENT_STORAGE, message, options);
  }
}
