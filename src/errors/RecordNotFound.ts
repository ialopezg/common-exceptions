import {NotFound} from './NotFound';

/**
 * RecordNotFound Error. The requested entity could not be localized.
 */
export class RecordNotFound extends NotFound {
  name = 'RecordNotFound';

  constructor(id: number | string, detail?: string, errorType?: string) {
    super('Not Found');

    // Error type
    this.errorType = errorType || `Application.${this.name}`;

    // Additional error detail
    this.detail = detail || `Entity with id: ${id} couldn't be found.`;
  }
}
