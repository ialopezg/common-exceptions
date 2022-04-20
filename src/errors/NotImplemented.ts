import { CustomError } from '../custom_error';

/**
 * Not Implemented Error. The server does not support the functionality required to fulfill the request.
 */
export class NotImplemented extends CustomError {
  name = 'NotImplemented';

  constructor(message?: string, details?: string) {
    super({
      statusCode: 501,
      message: message || 'Not Implemented',
      errorType: `Server.${NotImplemented.name}`,
    });

    this.name = NotImplemented.name;

    // Additional error detail
    this.details =
      details ||
      'The request can not be handled because it is not supported by the server.';
  }
}
