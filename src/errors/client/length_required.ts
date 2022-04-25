import { CustomError } from '../custom_error';

/**
 * Represents a error when the server has rejected the request because it requires the Content-Length header field to be defined.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class LengthRequired extends CustomError {
  /**
   * Creates a LengthRequired error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({ statusCode: 411, message: message ?? 'Length Required' });

    // Error name
    this.name = LengthRequired.name;
    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server has rejected the request because it requires the Content-Length header field to be defined.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
