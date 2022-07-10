import { expect } from 'chai';

import { CustomError, TooEarlyException } from '../../../../errors';
import { getHttpStatusDefaultTitle } from '../../../../utils';

describe('TooEarlyException', () => {
  describe('instance', () => {
    it('should not equal to a CustomError property values', () => {
      const error = new TooEarlyException('Test Error', {
        details: 'Test Error Details',
      });

      expect(error).instanceOf(CustomError);
      expect(error.message).to.be.not.eql(
        getHttpStatusDefaultTitle(error.getStatus()),
      );
    });
  });
});
