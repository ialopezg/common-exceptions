import { CustomError } from '../CustomError';

/**
 * NotFound Error when a resource could not be localized.
 */
export class NotFound extends CustomError {
  constructor(message?: string) {
    super();

    this.name = 'NotFoundError';
    this.statusCode = 404;
    this.message = message || 'Resource not found'
  }
}
