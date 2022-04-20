import { CustomError } from '../custom_error';

/**
 * Represents a error when the server does not support the functionality required to fulfill the request.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class NotImplemented extends CustomError {
  /**
   * Creates a NotImplemented error.
   * @constructor
   *
   * @param details Optional. Additional message details.
   */
  constructor(details?: string) {
    super({
      statusCode: 501,
      message: 'Not Implemented',
    });

    // Error name
    this.name = NotImplemented.name;
    // Error type
    this.errorType = `Server.${this.name}`;
    // Additional error detail
    this.details =
      details ??
      'The request can not be handled because it is not supported by the server.';
  }
}
