import { CustomError } from '../custom_error';

/**
 * Represents a error when the server knows the request method, the method has been disabled and can not be used.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class MethodNotAllowed extends CustomError {
  /**
   * Creates a MethodNotAllowed error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({
      statusCode: 405,
      message: message ?? 'Method Not Allowed',
    });
    // Error name
    this.name = MethodNotAllowed.name;
    // Additional error details
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server knows the requested method, the method has been disabled and cannot be used',
          param: null,
          location: null,
        },
      ],
    };
  }
}
