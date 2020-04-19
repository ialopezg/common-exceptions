import { CustomError } from '../CustomError';

export class NotAcceptable extends CustomError {
  name = 'NotAcceptable';

  constructor(message?: string, detail?: string, errorType?: string) {
    super(406, message || 'Not Acceptable', detail);

    // Error type
    this.errorType = errorType || `Application.${this.name}`;
  }
}
