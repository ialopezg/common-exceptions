import { CustomError } from '../custom_error';

/**
 * ServiceUnavailable Error: The server is currently not ready to handle the request. This is a common occurrence when the server is down for maintenance or is overloaded.
 */
export class ServiceUnavailable extends CustomError {
  constructor() {
    super({ statusCode: 503, message: 'Service Unavailable' });

    // Error name
    this.name = 'ServiceUnavailable';
    // Error type
    this.errorType = `Server.${ServiceUnavailable.name}`;
    // Additional error detail
    this.details =
      'The server is currently not ready to handle the request. This is a common occurrence when the server is down for maintenance or is overloaded.';
  }
}
