import { CustomError } from '../custom_error';

/**
 * Represents a error when the server does not meet one or multiple preconditions that were indicated in the request header fields.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class PreconditionFailed extends CustomError {
  /**
   * Creates a Unauthorized error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({ statusCode: 412, message: message ?? 'Precondition Failed' });

    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server does not meet one or multiple preconditions that were indicated in the request header fields.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
