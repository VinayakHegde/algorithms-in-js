import helpers from '.';

describe('helers.hasHomogeniousItems', () => {
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

describe('helers.getValueFrom', () => {
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

describe('helpers.hasAllNumberType', () => {
  it('should be truthy', () => {
    const listNum = [1, 2, 3];
    const listStr = ['a', 'b', 'c'];
    const listMix = [1, '2', 3, { x: 'abc' }];
    expect(helpers.hasAllNumberType(listNum)).toBeTruthy();
    expect(helpers.hasAllNumberType(listMix)).toBeFalsy();
    expect(helpers.hasAllNumberType(listStr)).toBeFalsy();
    expect(helpers.hasAllNumberType()).toBeFalsy();
    expect(helpers.hasAllNumberType([])).toBeFalsy();
  });
});

describe('helpers.hasUniqurNumber', () => {
  it('should be truthy', () => {
    const listNum = [1, 2, 3];
    const listNumRepeat = [1, 2, 3, 1, 2, 4, 5];
    const listStr = ['a', 'b', 'c'];
    const listMix = [1, '2', 3, { x: 'abc' }];
    expect(helpers.hasUniqueNumbers(listNum)).toBeTruthy();
    expect(helpers.hasUniqueNumbers(listNumRepeat)).toBeFalsy();
    expect(helpers.hasUniqueNumbers(listMix)).toBeFalsy();
    expect(helpers.hasUniqueNumbers(listStr)).toBeFalsy();
    expect(helpers.hasUniqueNumbers()).toBeFalsy();
    expect(helpers.hasUniqueNumbers([])).toBeFalsy();
  });
});

describe('helpers.min', () => {
  it('should return 1 when 1, 2 passed', () => {
    expect(helpers.min(1, 2)).toBe(1);
  });
  it('should return a when a, z passed', () => {
    expect(helpers.min('a', 'z')).toBe('a');
  });
  it('should return 2 when 2 passed', () => {
    expect(helpers.min(2)).toBe(2);
  });
  it('should return null when nothing passed', () => {
    expect(helpers.min()).toBeNull();
  });
});

describe('helpers.max', () => {
  it('should return 2 when 1, 2 passed', () => {
    expect(helpers.max(1, 2)).toBe(2);
  });
  it('should return z when a, z passed', () => {
    expect(helpers.max('a', 'z')).toBe('z');
  });
  it('should return 2 when 2 passed', () => {
    expect(helpers.max(2)).toBe(2);
  });
  it('should return null when nothing passed', () => {
    expect(helpers.max()).toBeNull();
  });
});
