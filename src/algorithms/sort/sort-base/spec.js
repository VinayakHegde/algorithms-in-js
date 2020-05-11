import Base from '.';

describe('Search Base', () => {
  const base = new Base();

  it('should have find method', () => {
    expect(typeof base.sort).toBe('function');
    expect(base.sort()).toBe([]);
  });
});
