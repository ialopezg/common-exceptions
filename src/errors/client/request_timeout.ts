import { CustomError } from '../custom_error';

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
   * @param message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({ statusCode: 408, message: message ?? 'Request Timeout' });

    // Error name
    this.name = RequestTimeout.name;
    // Error type
    this.errorType = `Client.${this.name}`;
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
