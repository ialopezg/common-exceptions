import { CustomError } from '../custom_error';

/**
 * Represents a error when the resource that is being accessed is locked.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class Locked extends CustomError {
  /**
   * Creates a Locked error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({ statusCode: 423, message: message ?? 'Locked' });

    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The resource that is being accessed is locked.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
