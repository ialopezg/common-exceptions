import { expect } from 'chai';

import { getHttpStatusDefaultTitle } from '../../utils';
import { HttpStatus } from '../../enums';

describe('getHttpStatusCodeDefaultTitle', () => {
  it('should parse and capitalize the status with a word', function () {
    expect(getHttpStatusDefaultTitle(HttpStatus.CONFLICT)).to.be.eql('Conflict');
  });

  it('should parse and capitalize the status with more than a word', function () {
    expect(getHttpStatusDefaultTitle(HttpStatus.BAD_REQUEST)).to.be.eql('Bad Request');
  });
});
