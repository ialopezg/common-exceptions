import { expect } from 'chai';

import { LockedException } from '../../../../errors';
import {
  getHttpStatusDefaultMessage,
  getHttpStatusDefaultTitle,
} from '../../../../utils';

describe('LockedException', () => {
  describe('constructor', () => {
    describe('with arguments', () => {
      it('should return an instance with custom values', () => {
        const error = new LockedException('Error Test', {
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
