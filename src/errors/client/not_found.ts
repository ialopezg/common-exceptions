import { CustomError } from '../../custom_error';

/**
 * Represents a error when the server either did not find a current representation for the requested resource or is trying to hide its existence from an unauthorized client.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class NotFound extends CustomError {
  /**
   * Creates a NotFound error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param details Optional. Additional message details.
   */
  constructor(message?: string, details?: string) {
    super({
      statusCode: 404,
      message: message ?? 'Not found',
    });

    // Error name
    this.name = NotFound.name;
    // Error type
    this.errorType = `Client.${this.name}`;
    // Additional error detail
    this.details =
      details ??
      'The server either did not find a current representation for the requested resource or is trying to hide its existence from an unauthorized client.';
  }
}
