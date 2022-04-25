import { CustomError } from '../custom_error';

/**
 * Represents a error when the server refuses to brew coffee because it is, in fact, a teapot. (It is a reference to a 1998 April Fools' joke called "Hyper Text Coffee Pot Control Protocol").
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class IAmATeapot extends CustomError {
  /**
   * Creates a IAmATeapot error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param {[key: string]: any} details Optional. Additional message details.
   */
  constructor(message?: string, details?: { [key: string]: any }) {
    super({ statusCode: 418, message: message ?? 'I am a Teapot' });

    // Error name
    this.name = IAmATeapot.name;
    // Additional error detail
    this.details = details ?? {
      errors: [
        {
          value: this.statusCode,
          msg: "The server refuses to brew coffee because it is, in fact, a teapot. (It is a reference to a 1998 April Fools' joke called ''Hyper Text Coffee Pot Control Protocol'').",
          param: null,
          location: null,
        },
      ],
    };
  }
}
