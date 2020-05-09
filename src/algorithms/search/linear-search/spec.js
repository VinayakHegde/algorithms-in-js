import search from '.';

describe('linearSearch', () => {
  it('should search all numbers in list', () => {
    const list = [1, 2, 4, 6, 2];

    expect(search()).toEqual([]);
    expect(search({ list: [] })).toEqual([]);
    expect(search({ value: 10 })).toEqual([]);
    expect(search({ list: [], value: 10 })).toEqual([]);
    expect(search({ list, value: 10 })).toEqual([]);
    expect(search({ list, value: 1 })).toEqual([0]);
    expect(search({ list, value: 2 })).toEqual([1, 4]);
  });

  it('should search all strings in list', () => {
    const list = ['a', 'b', 'a'];

    expect(search({ list, value: 'c' })).toEqual([]);
    expect(search({ list, value: 'b' })).toEqual([1]);
    expect(search({ list, value: 'a' })).toEqual([0, 2]);
  });

  it('should search through objects as well', () => {
    const list = [{ key: 5 }, { key: 6 }, { key: 7 }, { key: 6 }];

    expect(search({ list, value: 10 })).toEqual([]);
    expect(search({ list, value: { key: 10 } })).toEqual([]);
    expect(search({ list, value: { key: 5 } })).toEqual([0]);
    expect(search({ list, value: { key: 6 } })).toEqual([1, 3]);
  });

  it('should search through heterogenious list', () => {
    const list = [2, { key: 6 }, 'a', { key: 6 }, 'axe', { key: 2 }, 4];

    expect(search({ list, value: { key: 10 } })).toEqual([]);
    expect(search({ list, value: 2 })).toEqual([0]);
    expect(search({ list, value: { key: 6 } })).toEqual([1, 3]);
    expect(search({ list, value: 'axe' })).toEqual([4]);
  });
});
