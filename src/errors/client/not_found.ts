import { CustomError } from '../custom_error';

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
   * @param {string} message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({
      statusCode: 404,
      message: message ?? 'Not found',
    });

    // Error name
    this.name = NotFound.name;
    // Additional error details
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The server either did not find a current representation for the requested resource or is trying to hide its existence from an unauthorized client.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
