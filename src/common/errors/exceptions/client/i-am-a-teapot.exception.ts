import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents an error when the server refuses to brew coffee because it is, in fact, a teapot. (It is a reference to a 1998 April Fools' joke called "Hyper Text Coffee Pot Control Protocol").
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class IAmATeapotException extends CustomError {
  /**
   * Creates a IAmATeapot error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.I_AM_A_TEAPOT, message, options);
  }
}
