import { NotFound } from './not_found';

/**
 * Represents a error when the requested entity could not be localized.
 * @class
 *
 * @author Isidro A. Lopez G. <me@ialopezg.com> (https://ialopezg.com)
 * @extends {NotFound}
 * @license MIT
 */
export class RecordNotFound extends NotFound {
  /**
   * Creates a RecordNotFound error.
   * @constructor
   *
   * @param message Optional. Message to be displayed.
   * @param details Optional. Additional message details.
   */
  constructor(id: number | string, message?: string, details?: string) {
    super(message ?? 'Record Not Found');

    // Error name
    this.name = RecordNotFound.name;
    // Error type
    this.errorType = `Client.Database.${this.name}`;
    // Additional error detail
    this.details = details ?? `Entity with id: ${id} couldn't be found.`;
  }
}
