import { CustomError } from '../../custom_error';

/**
 * Represents a error when the request has not been applied because the server requires user authentication.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class Unauthorized extends CustomError {
  /**
   * Creates a Unauthorized error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({ status: 401, message: message ?? 'Unauthorized' });

    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The request has not been applied because the server requires user authentication.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
