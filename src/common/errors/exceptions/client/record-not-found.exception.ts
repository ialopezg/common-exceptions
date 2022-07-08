import { ExceptionOptions } from '../../../interfaces';
import { NotFoundException } from './not-found.exception';

/**
 * Represents a error when the requested entity could not be localized.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {NotFoundException}
 * @license MIT
 */
export class RecordNotFoundException extends NotFoundException {
  /**
   * Creates a RecordNotFound error.
   * @constructor
   *
   * @param message Message to be displayed.
   * @param options Additional message details.
   */
  constructor(
    id: number | string,
    message?: string,
    options?: ExceptionOptions,
  ) {
    super(message || 'Record Not Found');

    // Additional error detail
    this.details = options || {
      message: `Entity with id: ${id} couldn't be found.`,
    };
  }
}
