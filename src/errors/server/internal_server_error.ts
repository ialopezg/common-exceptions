import { CustomError } from '../custom_error';

/**
 * Represents a error when the server has encountered a situation that it does not know how to handle.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class InternalServerError extends CustomError {
  /**
   * Creates a InternalServerError error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({ statusCode: 500, message: message ?? 'Internal Server Error' });

    // Error name
    this.name = InternalServerError.name;
    // Error type
    this.errorType = 'Server';
    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server has encountered a situation that it does not know how to handle.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
