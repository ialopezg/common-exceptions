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
   * @param message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({ statusCode: 421, message: message ?? 'Misdirected Request' });

    // Error name
    this.name = MisdirectedRequest.name;
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
