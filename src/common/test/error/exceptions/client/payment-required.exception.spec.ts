import { expect } from 'chai';

import { PaymentRequiredException } from '../../../../errors';
import {
  getHttpStatusDefaultMessage,
  getHttpStatusDefaultTitle,
} from '../../../../utils';

describe('PaymentRequiredException', () => {
  describe('constructor', () => {
    describe('with arguments', () => {
      it('should return an instance with custom values', () => {
        const error = new PaymentRequiredException('Error Test', {
          details: { message: 'Error Test Details' },
        });
        const defaultTitle = `Custom Error (${getHttpStatusDefaultTitle(
          error.getStatus(),
        )})`;
        const defaultDetails = {
          message: getHttpStatusDefaultMessage(error.getStatus()),
        };

        expect(error.message).to.be.not.eql(defaultTitle);
        expect(error.details).to.be.not.eql(defaultDetails);
      });
    });
  });
});
