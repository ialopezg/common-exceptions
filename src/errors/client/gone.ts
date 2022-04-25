import { CustomError } from '../custom_error';

/**
 * Represents a error when the target resource has been deleted and the condition seems to be permanent.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class Gone extends CustomError {
  /**
   * Creates a Gone error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({ statusCode: 41o, message: message ?? 'Gone' });

    // Error name
    this.name = Gone.name;
    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The target resource has been deleted and the condition seems to be permanent.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
