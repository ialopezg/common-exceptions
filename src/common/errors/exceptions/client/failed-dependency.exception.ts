import { HttpStatus } from '../../../enums';
import { ExceptionOptions } from '../../../interfaces';
import { CustomError } from '../../custom-error';

/**
 * Represents a error when the method could not be performed on the resource because the requested action depended on another action and that action failed. For example, if a command in a PROPPATCH method fails, then, at minimum, the rest of the commands will also fail with 424 (Failed Dependency).
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {CustomError}
 * @license MIT
 */
export class FailedDependencyException extends CustomError {
  /**
   * Creates a FailedDependency error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(message?: string, options?: ExceptionOptions) {
    super(
      HttpStatus.FAILED_DEPENDENCY,
      message || 'Failed Dependency',
      options,
    );

    // Additional error detail
    this.details = options?.details || {
      message:
        'The method could not be performed on the resource because the requested action depended on another action and that action failed.',
    };
  }
}
