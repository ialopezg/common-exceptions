import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the server is unwilling to risk processing a request that might be replayed, which creates the potential for a replay attack.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class TooEarlyException extends CustomError {
  /**
   * Creates a TooEarly error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.TOO_EARLY, message || 'Too Early', options);

    // Additional error detail
    this.details = options?.details || {
      message:
        'The server is unwilling to risk processing a request that might be replayed, which creates the potential for a replay attack.',
    };
  }
}
