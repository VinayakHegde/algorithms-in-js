import Base from '.';

describe('Search Base', () => {
  const base = new Base();

  it('should have find method', () => {
    expect(typeof base.find).toBe('function');
    expect(base.find(2)).toBe(-1);
  });
});
