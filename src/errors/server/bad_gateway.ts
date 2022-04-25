import { CustomError } from '../custom_error';

/**
 * Represents a error when the server received an invalid response while working as a gateway to handle the response.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class BadGateway extends CustomError {
  /**
   * Creates a BadGateway error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({
      statusCode: 502,
      message: message ?? 'The web server reported a bad gateway error.',
    });

    // Error name
    this.name = BadGateway.name;
    // Error type
    this.errorType = 'Server';
    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server received an invalid response while working as a gateway to handle the response.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
