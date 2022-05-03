import { CustomError } from '../custom_error';

/**
 * Represents a error when the server when it does not find any content following the criteria given by the user agent.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class NotAcceptable extends CustomError {
  /**
   * Creates a NotAcceptable error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({
      statusCode: 406,
      message: message ?? 'Not Acceptable',
    });

    // Additional error details
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server when it does not find any content following the criteria given by the user agent.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
