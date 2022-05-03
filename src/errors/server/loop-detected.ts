import { CustomErrorType } from '../../enums';
import { CustomErrorDetail } from '../../interfaces';
import { CustomError } from '../custom_error';

/**
 * Represents a error when the server has detected an infinite loop while processing the request.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class LoopDetected extends CustomError {
  /**
   * Creates a LoopDetected error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {CustomErrorDetail|object|string} details Optional. Additional message details.
   */
  constructor(
    message?: string,
    details?: CustomErrorDetail | { [key: string]: any } | string,
  ) {
    super({ statusCode: 502, message: message ?? 'Loop Detected' });

    // Error type
    this.errorType = CustomErrorType.Server;
    // Additional error details
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server has detected an infinite loop while processing the request.',
        },
      ],
    };
  }
}
