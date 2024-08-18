import Characters from '../app/characters';
import Page from '../app/page';

describe('index-page', () => {
  it('should be Characters page', () => {
    expect(Page).toEqual(Characters);
  });
});
