import {NotFound} from './NotFound';

/**
 * RecordNotFound Error when an entity could not be localized.
 */
export class RecordNotFound extends NotFound {
  name = 'RecordNotFound';
  statusCode = 404;

  constructor(id: number | string) {
    super(`Entity with id: ${id} couldn't be found.`);
  }
}
