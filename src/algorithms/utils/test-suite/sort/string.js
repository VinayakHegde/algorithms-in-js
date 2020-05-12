export default sort => {
  it('should sort string array', () => {
    expect(sort({ list: [''] })).toEqual(['']);
    expect(sort({ list: ['a'] })).toEqual(['a']);
    expect(sort({ list: ['aa', 'a'] })).toEqual(['a', 'aa']);
    expect(sort({ list: ['aa', 'q', 'bbbb', 'ccc'] })).toEqual(['aa', 'bbbb', 'ccc', 'q']);
    expect(sort({ list: ['aa', 'aa'] })).toEqual(['aa', 'aa']);
  });
};
