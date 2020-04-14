import {NotFound} from './NotFound';

/**
 * RecordNotFound Error. The requested entity could not be localized.
 */
export class RecordNotFound extends NotFound {
  name = 'RecordNotFound';

  constructor(id: number | string) {
    super('Not Found');

    this.detail = `Entity with id: ${id} couldn't be found.`;
  }
}
