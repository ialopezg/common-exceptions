import { CustomError } from '../custom_error';

/**
 * Represents a error when the method could not be performed on the resource because the requested action depended on another action and that action failed. For example, if a command in a PROPPATCH method fails, then, at minimum, the rest of the commands will also fail with 424 (Failed Dependency).
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class FailedDependency extends CustomError {
  /**
   * Creates a FailedDependency error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({ statusCode: 424, message: message ?? 'Failed Dependency' });

    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The method could not be performed on the resource because the requested action depended on another action and that action failed.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
