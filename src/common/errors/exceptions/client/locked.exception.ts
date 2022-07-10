import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents an error when the resource that is being accessed is locked.
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class LockedException extends CustomError {
  /**
   * Creates a Locked error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(HttpStatus.LOCKED, message, options);
  }
}
