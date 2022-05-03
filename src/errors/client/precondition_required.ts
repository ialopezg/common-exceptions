import { CustomError } from '../custom_error';

/**
 * Represents a error when the origin server requires the request to be conditional.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class PreconditionRequired extends CustomError {
  /**
   * Creates a PreconditionRequired error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({ statusCode: 428, message: message ?? 'Precondition Required' });

    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The origin server requires the request to be conditional.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
