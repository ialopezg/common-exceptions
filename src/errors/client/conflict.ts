import { CustomError } from '../../custom_error';

/**
 * Represents a error when the request could not be fulfilled due to a conflict with the current state of the target resource and is used in situations where the user might be able to resubmit the request after resolving the conflict.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class Conflic extends CustomError {
  /**
   * Creates a Conflict error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param details Optional. Additional message details.
   */
  constructor(message?: string, details?: string) {
    super({ statusCode: 409, message: message ?? 'Conflict' });

    // Error name
    this.name = Conflic.name;
    // Error type
    this.errorType = `Client.${this.name}`;
    // Additional error detail
    this.details =
      details ??
      'The request could not be fulfilled due to a conflict with the current state of the target resource and is used in situations where the user might be able to resubmit the request after resolving the conflict.';
  }
}
