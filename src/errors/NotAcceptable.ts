import { CustomError } from '../CustomError';

export class NotAcceptable extends CustomError {
  name = 'NotAcceptable';

  constructor(message?: string, detail?: string) {
    super(406, message || 'Not Acceptable', detail);
  }
}
