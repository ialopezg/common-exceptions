import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents an error when the server has rejected the request because it requires the Content-Length header field to be defined.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class LengthRequiredException extends CustomError {
  /**
   * Creates a LengthRequired error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.LENGTH_REQUIRED, message, options);
  }
}
