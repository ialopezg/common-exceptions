import { CustomError } from '../../custom_error';

/**
 * Represents a error when the server is unwilling to risk processing a request that might be replayed, which creates the potential for a replay attack.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class TooEarly extends CustomError {
  /**
   * Creates a TooEarly error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({ status: 425, message: message ?? 'Too Early' });

    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server is unwilling to risk processing a request that might be replayed, which creates the potential for a replay attack.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
