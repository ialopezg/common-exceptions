import { expect } from 'chai';

import { LengthRequiredException } from '../../../../errors';
import {
  getHttpStatusDefaultMessage,
  getHttpStatusDefaultTitle,
} from '../../../../utils';

describe('LengthRequiredException', () => {
  describe('constructor', () => {
    describe('with arguments', () => {
      it('should return an instance with custom values', () => {
        const error = new LengthRequiredException('Error Test', {
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
