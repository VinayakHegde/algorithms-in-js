import Base from '.';

describe('Search Base', () => {
  const base = new Base();

  it('should haev find and update methods', () => {
    expect(typeof base.find).toBe('function');
    expect(typeof base.update).toBe('function');
  });

  it('should haev find and update methods', () => {
    base.update([1, 2, 3]);
    expect(base.list).toEqual([1, 2, 3]);
    expect(base.find(2)).toBe(-1);
  });
});
