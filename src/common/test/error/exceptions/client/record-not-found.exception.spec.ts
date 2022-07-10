import { expect } from 'chai';

import { RecordNotFoundException } from '../../../../errors';
import {
  getHttpStatusDefaultMessage,
  getHttpStatusDefaultTitle,
} from '../../../../utils';

describe('RecordNotFoundException', () => {
  describe('constructor', () => {
    describe('passing only `id` as argument', () => {
      it('should return an instance with custom values', () => {
        const id = 10001;
        const error = new RecordNotFoundException(id);
        const defaultTitle = `Custom Error (${getHttpStatusDefaultTitle(
          error.getStatus(),
        )})`;
        const defaultDetails = {
          message: getHttpStatusDefaultMessage(4041).replace(
            '%s',
            id.toString(),
          ),
        };

        expect(error.message).to.be.eql(defaultTitle);
        expect(error.details).to.be.eql(defaultDetails);
      });
    });

    describe('with arguments', () => {
      it('should return an instance with custom values', () => {
        const error = new RecordNotFoundException(10001, 'Error Test', {
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
