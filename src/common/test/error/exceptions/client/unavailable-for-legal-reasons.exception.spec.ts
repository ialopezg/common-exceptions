import { expect } from 'chai';

import {
  CustomError,
  UnavailableForLegalReasonsException,
} from '../../../../errors';
import { getHttpStatusDefaultTitle } from '../../../../utils';

describe('UnavailableForLegalReasonsException', () => {
  describe('instance', () => {
    it('should not equal to a CustomError property values', () => {
      const error = new UnavailableForLegalReasonsException('Test Error', {
        details: 'Test Error Details',
      });

      expect(error).instanceOf(CustomError);
      expect(error.message).to.be.not.eql(
        getHttpStatusDefaultTitle(error.getStatus()),
      );
    });
  });
});
