import { ErrorType } from '../../../enums';
import { ErrorDetailInterface } from '../../../interfaces';
import { CustomError } from '../../custom_error';

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
   * @param {ErrorDetailInterface|object|string} details Optional. Additional message details.
   */
  constructor(
    message?: string,
    details?: ErrorDetailInterface | { [key: string]: any } | string,
  ) {
    super({
      status: 511,
      message: message ?? 'Network Authentication Required',
    });

    // Error type
    this.errorType = ErrorType.Server;
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
