import Base from '.';

describe('Algorithm Base', () => {
  const base = new Base();

  it('should have update methods', () => {
    expect(typeof base.update).toBe('function');
    base.update([1, 2, 3]);
    expect(base.list).toEqual([1, 2, 3]);
  });
});
