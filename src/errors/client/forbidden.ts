import { CustomError } from '../../custom_error';

/**
 * Represents a error when the client request has been rejected because the client does not have rights to access the content.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class Forbidden extends CustomError {
  /**
   * Creates a Forbidden error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param details Optional. Additional message details.
   */
  constructor(message?: string, details?: string) {
    super({
      statusCode: 403,
      message: message ?? 'Forbidden',
    });

    // Error name
    this.name = Forbidden.name;
    // Error type
    this.errorType = `Client.${this.name}`;
    // Additional error detail
    this.details =
      details ??
      'The client request has been rejected because the client does not have rights to access the content.';
  }
}
