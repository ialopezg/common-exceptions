import { CustomErrorType } from '../../enums';
import { CustomErrorDetail } from '../../interfaces';
import { CustomError } from '../custom_error';

/**
 * Represents an error when the client needs to authenticate to gain network access.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class NetworkAuthenticationRequired extends CustomError {
  /**
   * Creates a NetworkAuthenticationRequired error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {CustomErrorDetail|object|string} details Optional. Additional message details.
   */
  constructor(
    message?: string,
    details?: CustomErrorDetail | { [key: string]: any } | string,
  ) {
    super({
      statusCode: 511,
      message: message ?? 'Network Authentication Required',
    });

    // Error type
    this.errorType = CustomErrorType.Server;
    // Additional error details
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The client needs to authenticate to gain network access.',
        },
      ],
    };
  }
}
