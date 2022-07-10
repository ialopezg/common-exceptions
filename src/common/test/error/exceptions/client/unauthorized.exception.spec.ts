import { expect } from 'chai';

import { CustomError, UnauthorizedException } from '../../../../errors';
import { getHttpStatusDefaultTitle } from '../../../../utils';

describe('UnauthorizedException', () => {
  describe('instance', () => {
    it('should not equal to a CustomError property values', () => {
      const error = new UnauthorizedException('Test Error', {
        details: 'Test Error Details',
      });

      expect(error).instanceOf(CustomError);
      expect(error.message).to.be.not.eql(
        getHttpStatusDefaultTitle(error.getStatus()),
      );
    });
  });
});
