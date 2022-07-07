import { ErrorType } from '../../../enums';
import { ErrorDetailInterface } from '../../../interfaces';
import { CustomError } from '../../custom_error';

/**
 * Represents a error when the method could not be performed on the resource because the
 * server is not able to store the representation that would be needed to complete the
 * request successfully.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class InsufficientStorage extends CustomError {
  /**
   * Creates a InsufficientStorage error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {ErrorDetailInterface|object|string} details Optional. Additional message details.
   */
  constructor(
    message?: string,
    details?: ErrorDetailInterface | { [key: string]: any } | string,
  ) {
    super({ status: 502, message: message ?? 'Insufficient Storage' });

    // Error type
    this.errorType = ErrorType.Server;
    // Additional error details
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The method could not be performed on the resource because the server is not able to store the representation that would be needed to complete the request successfully.',
        },
      ],
    };
  }
}
