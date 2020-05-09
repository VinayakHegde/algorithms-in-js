export default search => {
  it('should search object in array', () => {
    const list = [
      { number: 1, string: 'string 1', object: { number: 1 } },
      { number: 2, string: 'string 2', object: { number: 2 } },
      { number: 3, string: 'string 3', object: { number: 3 } },
    ];

    expect(search({ list: [], value: { number: 1 } })).toBe(-1);
    expect(search({ list, value: { number: 4 } })).toBe(-1);
    expect(search({ list: [list[0]], value: { number: 1 } })).toBe(0);
    expect(search({ list, value: { number: 2 } })).toBe(1);
    expect(search({ list, value: { number: 3 } })).toBe(2);
  });
};
