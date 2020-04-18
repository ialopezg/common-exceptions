import { CustomError } from '../CustomError';

/**
 * ServiceUnavailable Error. The server is currently unable to handle the request due to a temporary overloading or maintenance of the server.
 */
export class ServiceUnavailable extends CustomError {
  name = 'ServiceUnavailable';

  constructor(message?: string, detail?: string, errorType?: string) {
    super(503, message || 'Service Unavailable');

    // Error type
    this.errorType = errorType || `Application.${this.name}`;

    // Additional error detail
    this.detail =
      detail ||
      'The server is currently unable to handle the request due to a temporary overloading or maintenance of the server.';
  }
}
