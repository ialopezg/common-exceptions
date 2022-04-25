import { CustomError } from '../custom_error';

/**
 * Represents a error while the request was well-formed, the server was unable to follow it, due to semantic errors.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class UnprocessableEntity extends CustomError {
  /**
   * Creates a UnprocessableEntity error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({ statusCode: 422, message: message ?? 'Unprocessable Entity' });

    // Error name
    this.name = UnprocessableEntity.name;
    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'While the request was well-formed, the server was unable to follow it, due to semantic errors.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
