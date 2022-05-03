import { CustomError } from '../custom_error';

/**
 * Represents a error when the given time, the user has sent too many requests.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class TooManyRequests extends CustomError {
  /**
   * Creates a TooManyRequests error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({ statusCode: 429, message: message ?? 'Too Many Requests' });

    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The given time, the user has sent too many requests.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
