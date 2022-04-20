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
   * @param message Optional. Message to be displayed.
   * @param details Optional. Additional message details.
   */
  constructor(message?: string, details?: string) {
    super({
      statusCode: 406,
      message: message ?? 'Not Acceptable',
    });

    // Error name
    this.name = NotAcceptable.name;
    // Error type
    this.errorType = `Client.${this.name}`;
    // Additional error detail
    this.details =
      details ??
      'The server when it does not find any content following the criteria given by the user agent.';
  }
}
