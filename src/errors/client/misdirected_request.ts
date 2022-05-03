import { CustomError } from '../custom_error';

/**
 * Represents a error when the client request was directed at a server that is not configured to produce a response.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class MisdirectedRequest extends CustomError {
  /**
   * Creates a MisdirectedRequest error.
   * @constructor
   *
   * @param {string} message Optional. Message to be displayed.
   * @param {object|string} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any } | string) {
    super({ statusCode: 421, message: message ?? 'Misdirected Request' });

    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: 'The client request was directed at a server that is not configured to produce a response.',
          param: null,
          location: null,
        },
      ],
    };
  }
}
