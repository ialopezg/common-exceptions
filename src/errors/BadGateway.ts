import { CustomError } from '../custom_error';
import { ICustomError } from '../interfaces';

/**
 * BadGateway Error: The server received an invalid response while working as a gateway to handle the response.
 */
export class BadGateway extends CustomError {
  constructor() {
    super({
      statusCode: 502,
      message: 'The web server reported a bad gateway error.',
    });

    // Error name
    this.name = BadGateway.name;
    // Error type
    this.errorType = `Server.${this.name}`;
    // Additional error detail
    this.details =
      'The server received an invalid response while working as a gateway to handle the response.';
  }
}
