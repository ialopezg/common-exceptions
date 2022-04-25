import { CustomError } from '../custom_error';

/**
 * Represents a error when the server is refusing to service the request because the request-target was longer than the server was willing to interpret.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class UriTooLong extends CustomError {
  /**
   * Creates a UriTooLong error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({ statusCode: 414, message: message ?? 'URI Too Long' });

    // Error name
    this.name = UriTooLong.name;
    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server is refusing to service the request because the request-target was longer than the server was willing to interpret.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
