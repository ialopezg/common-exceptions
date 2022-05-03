import { CustomError } from '../custom_error';

/**
 * Represents a error when the request could not be fulfilled due to a conflict with the current state of the target resource and is used in situations where the user might be able to resubmit the request after resolving the conflict.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class Conflict extends CustomError {
  /**
   * Creates a Conflict error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({ statusCode: 409, message: message ?? 'Conflict' });

    // Additional error details
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The request could not be fulfilled due to a conflict with the current state of the target resource and is used in situations where the user might be able to resubmit the request after resolving the conflict.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
