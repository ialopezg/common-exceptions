import { expect } from 'chai';

import { HttpVersionNotSupportedException } from '../../../../errors';
import {
  getHttpStatusDefaultMessage,
  getHttpStatusDefaultTitle,
} from '../../../../utils';

describe('HttpVersionNotSupportedException', () => {
  describe('constructor', () => {
    describe('with arguments', () => {
      it('should return an instance with default values', () => {
        const error = new HttpVersionNotSupportedException('Error Test', {
          details: { message: 'Error Test Details' },
        });
        const defaultTitle = `Custom Error (${getHttpStatusDefaultTitle(
          error.getStatus(),
        )})`;
        const defaultDetails = {
          message: getHttpStatusDefaultMessage(error.getStatus()),
        };

        expect(error).instanceOf(HttpVersionNotSupportedException);
        expect(error.message).to.be.not.eql(defaultTitle);
        expect(error.details).to.be.not.eql(defaultDetails);
      });
    });
  });
});
