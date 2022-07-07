import { ErrorType } from '../../../enums';
import { ErrorDetailInterface } from '../../../interfaces';
import { CustomError } from '../../custom_error';

/**
 * Represents a error when the request can not be handled because it is not supported by the server.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class NotImplemented extends CustomError {
  /**
   * Creates a NotImplemented error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {ErrorDetailInterface|object|string} details Optional. Additional message details.
   */
  constructor(
    message?: string,
    details?: ErrorDetailInterface | { [key: string]: any } | string,
  ) {
    super({ status: 501, message: message ?? 'Not Implemented' });

    // Error type
    this.errorType = ErrorType.Server;
    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The request can not be handled because it is not supported by the server.',
        },
      ],
    };
  }
}
