import { NotFound } from '../errors/NotFound';

/**
 * RecordNotFound Error. The requested entity could not be localized.
 */
export class RecordNotFound extends NotFound {
  name = 'RecordNotFound';

  constructor(
    id: number | string,
    message?: string,
    detail?: string,
    errorType?: string
  ) {
    super(message || 'Record Not Found');

    // Error type
    this.errorType = errorType || `Database.${this.name}`;

    // Additional error detail
    this.detail = detail || `Entity with id: ${id} couldn't be found.`;
  }
}
