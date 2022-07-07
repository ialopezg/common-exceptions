import { ErrorType } from '../../../enums';
import { ErrorDetailInterface } from '../../../interfaces';
import { CustomError } from '../../custom_error';

/**
 * Represents an error where further extensions are required for the server to be able to fulfil the request.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class NotExtended extends CustomError {
  /**
   * Creates a NotExtended error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {ErrorDetailInterface|object|string} details Optional. Additional message details.
   */
  constructor(
    message?: string,
    details?: ErrorDetailInterface | { [key: string]: any } | string,
  ) {
    super({ status: 510, message: message ?? 'Not Extended' });

    // Error type
    this.errorType = ErrorType.Server;
    // Additional error details
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'Further extensions are required for the server to be able to fulfil the request.',
        },
      ],
    };
  }
}
