import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the server when it does not find any content following the criteria given by the user agent.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class NotAcceptableException extends CustomError {
  /**
   * Creates a NotAcceptable error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.NOT_ACCEPTABLE, message || 'Not Acceptable', options);

    // Additional error details
    this.details = options?.details || {
      message:
        'The server when it does not find any content following the criteria given by the user agent.',
    };
  }
}
