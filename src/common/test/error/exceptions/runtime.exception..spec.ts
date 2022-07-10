import { expect } from 'chai';
import * as sinon from 'sinon';

import { RuntimeException } from '../../../errors';

describe('RuntimeException', () => {
  let error: RuntimeException;

  beforeEach(() => {
    error = new RuntimeException();
  });

  describe('instance', () => {
    it('should be an instance of RuntimeException with parent properties', () => {
      expect(error instanceof RuntimeException).to.be.true;
      expect(error).to.have.property('name');
      expect(error).to.have.property('message');
      expect(error).to.have.property('stack');
    });
  });

  describe('.getMessage()', () => {
    it('should called once', () => {
      const getMessageSpy = sinon.spy(error, 'getMessage');

      error.getMessage();

      expect(getMessageSpy.calledOnce).to.be.true;
    });

    it('should return a string value', () => {
      expect(error.getMessage()).to.be.a('string');
      expect(error.getMessage()).to.be.empty;
    });
  });
});
