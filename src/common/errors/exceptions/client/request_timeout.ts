import { CustomError } from '../../custom_error';

/**
 * Represents a error when the server did not receive a complete request in the time that it prepared to wait.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class RequestTimeout extends CustomError {
  /**
   * Creates a RequestTimeout error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({ status: 408, message: message ?? 'Request Timeout' });

    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server did not receive a complete request in the time that it prepared to wait.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
