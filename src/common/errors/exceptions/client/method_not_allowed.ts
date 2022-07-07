import { CustomError } from '../../custom_error';

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
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({
      status: 405,
      message: message ?? 'Method Not Allowed',
    });

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
