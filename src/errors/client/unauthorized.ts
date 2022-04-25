import { CustomError } from '../custom_error';

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
   * @param message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({ statusCode: 401, message: message ?? 'Unauthorized' });

    // Error name
    this.name = Unauthorized.name;
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
