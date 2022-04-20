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
   */
  constructor() {
    super({
      statusCode: 502,
      message: 'The web server reported a bad gateway error.',
    });

    // Error name
    this.name = BadGateway.name;
    // Error type
    this.errorType = `Server.${this.name}`;
    // Additional error detail
    this.details =
      'The server received an invalid response while working as a gateway to handle the response.';
  }
}
