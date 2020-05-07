import helpers from '.';

describe('Binary Search helers.hasHomogeniousItems', () => {
  it('hasHomogeniousItems should say array is homogeneous', () => {
    expect(helpers.hasHomogeniousItems()).toEqual({
      isHomogeneous: true,
    });
    expect(helpers.hasHomogeniousItems([])).toEqual({
      isHomogeneous: true,
    });
    expect(helpers.hasHomogeniousItems([1])).toEqual({
      isHomogeneous: true,
    });
    expect(helpers.hasHomogeniousItems([1, 2, 3, 4, 5])).toEqual({
      isHomogeneous: true,
      itemType: 'number',
    });
    expect(helpers.hasHomogeniousItems(['a', 'b', 'c', 'd'])).toEqual({
      isHomogeneous: true,
      itemType: 'string',
    });
    expect(helpers.hasHomogeniousItems([{ a: 1 }, { a: 2 }, { a: '3' }])).toEqual({
      isHomogeneous: true,
      itemType: 'object',
    });
  });
  it('hasHomogeniousItems should say array is not homogeneous', () => {
    expect(helpers.hasHomogeniousItems([1, { a: 2 }, '3', 4, 5])).toEqual({
      isHomogeneous: false,
      itemType: 'mixed',
    });
  });
});

describe('Binary Search helers.getValueFrom', () => {
  it('getValueFrom should return value at the index', () => {
    expect(helpers.getValueFrom({ list: [1, 2, 3, 4, 5], atIndex: 0, itemType: 'number' })).toEqual(1);
    expect(helpers.getValueFrom({ list: ['a', 'b', 'c', 'd'], atIndex: 0, itemType: 'number' })).toEqual('a');
    expect(helpers.getValueFrom({ list: [{ a: 1 }, { a: 2 }, { a: '3' }], atIndex: 0, itemType: 'objject' })).toEqual({
      a: 1,
    });
  });
  it('getValueFrom should return null at the index', () => {
    expect(helpers.getValueFrom({ list: [1, { a: 2 }, '3', 4, 5], itemType: 'mixed' })).toEqual(null);
  });
});
