import { CustomError } from '../custom_error';

/**
 * Represents a error when the request has not been applied because the server requires user authentication.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class Unauthorized extends CustomError {
  /**
   * Creates a Unauthorized error.
   *
   * @param message Optional. Message to be displayed.
   * @param details Optional. Additional message details.
   */
  constructor(message?: string, details?: string) {
    super({ statusCode: 401, message: message ?? 'Unauthorized' });

    // Error name
    this.name = Unauthorized.name;
    // Error type
    this.errorType = `Client.${this.name}`;
    // Additional error detail
    this.details =
      details ??
      'The request has not been applied because the server requires user authentication.';
  }
}
