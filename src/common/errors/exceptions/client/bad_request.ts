import { CustomError } from '../../custom_error';

/**
 * Represents a error when the server could not understand the request because of invalid syntax.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class BadRequest extends CustomError {
  /**
   * Creates a BadRequest error.
   * @constructor
   *
   * @param {string} message Optional. A custom message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({
      status: 400,
      // name: BadRequest.name,
      message: message ?? 'Bad Request',
    });

    // Additional error details
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server could not understand the request because of invalid syntax.',
          param: null,
          location: null,
        },
      ],
    };
  }
}