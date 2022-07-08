import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the target resource has been deleted and the condition seems to be permanent.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class GoneException extends CustomError {
  /**
   * Creates a Gone error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.GONE, message || 'Gone', options);

    // Additional error detail
    this.details = options?.details || {
      message:
        'The target resource has been deleted and the condition seems to be permanent.',
    };
  }
}
