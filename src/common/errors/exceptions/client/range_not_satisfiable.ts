import { CustomError } from '../../custom_error';

/**
 * Represents a error when the range specified in the Range header field of the request can't be fulfilled. The reason might be that the given range is outside the size of the target URI's data.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class RangeNotSatisfiable extends CustomError {
  /**
   * Creates a RangeNotSatisfiable error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({ status: 416, message: message ?? 'Range Not Satisfiable' });

    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: "The range specified in the Range header field of the request can't be fulfilled. The reason might be that the given range is outside the size of the target URI's data.",
          param: null,
          location: null,
        },
      ],
    };
  }
}
