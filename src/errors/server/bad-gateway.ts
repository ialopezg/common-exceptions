import { CustomErrorType } from '../../enums';
import { CustomErrorDetail } from '../../interfaces';
import { CustomError } from '../custom_error';

/**
 * Represents a error when the server received an invalid response while working as a gateway to handle the response.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class BadGateway extends CustomError {
  /**
   * Creates a BadGateway error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {CustomErrorDetail|object|string} details Optional. Additional message details.
   */
  constructor(
    message?: string,
    details?: CustomErrorDetail | { [key: string]: any } | string,
  ) {
    super({ statusCode: 502, message: message ?? 'Bad Gateway' });

    // Error type
    this.errorType = CustomErrorType.Server;
    // Additional error details
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server received an invalid response while working as a gateway to handle the response.',
        },
      ],
    };
  }
}
