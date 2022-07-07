import { CustomError } from '../../custom_error';

/**
 * Represents a error when the Expectation indicated by the Expect request-header field could not be met by the server.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class ExpectationFailed extends CustomError {
  /**
   * Creates a ExpectationFailed error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({ status: 417, message: message ?? 'Expectation Failed' });

    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The Expectation indicated by the Expect request-header field could not be met by the server.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
