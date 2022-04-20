import { CustomError } from '../../custom_error';

/**
 * Represents a error when the server could not understand the request because of invalid syntax.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class BadRequest extends CustomError {
  /**
   * Creates a BadRequest error.
   *
   * @param message Optional. Message to be displayed.
   * @param details Optional. Additional message details.
   */
  constructor(message?: string, details?: string) {
    super({
      statusCode: 400,
      message: message ?? 'Bad Request',
    });

    // Error name
    this.name = BadRequest.name;
    // Error type
    this.errorType = `Client.${this.name}`;
    // Additional error detail
    this.details =
      details ??
      'The server could not understand the request because of invalid syntax.';
  }
}
