import { ErrorType, HttpStatus } from '../../../enums';
import { ErrorDetailInterface, ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the server has detected an infinite loop while processing the request.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class LoopDetectedException extends CustomError {
  /**
   * Creates a LoopDetected error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.LOOP_DETECTED, message || 'Loop Detected', options);

    // Error type
    this.errorType = ErrorType.Server;
    // Additional error details
    this.details = options?.details || {
      message:
        'The server has detected an infinite loop while processing the request.',
    };
  }
}
