import HashTable, { DEFAULT_SIZE } from '.';

describe('Hash Table', () => {
  it('should set the default size when not defined', () => {
    const hashTable = new HashTable(5);
    expect(hashTable.table.length).toBe(5);

    const defaultHashTable = new HashTable();
    expect(defaultHashTable.table.length).toBe(DEFAULT_SIZE);
  });

  it('should generate consistant hash value', () => {
    const hashTable = new HashTable(5);

    expect(hashTable.hash('vin')).toBe(3);
    expect(hashTable.hash('vin')).toBe(3);
    expect(hashTable.hash('A')).toBe(0);
  });

  it('should insert the values into table', () => {
    const hashTable = new HashTable(5);
    expect(hashTable.getValues()).toEqual([]);

    hashTable.insert('A', 1);
    hashTable.insert('A', 2);
    expect(hashTable.getValueByKey('A')).toBe(2);

    hashTable.insert('Aa', 1);
    hashTable.insert('Aaa', 1);
    hashTable.insert('Aaab', 1);
    hashTable.insert('Aaac', 1);
    hashTable.insert('Aaad', 1);
    expect(hashTable.getValues()).toEqual([2, 1, 1, 1, 1, 1]);
  });

  it('should hold the keys and hash value and check it correctly', () => {
    const hashTable = new HashTable(5);

    hashTable.insert('A', 1);

    expect(hashTable.contains('A')).toBeTruthy();
    expect(hashTable.contains('a')).toBeFalsy();
  });

  it('should remove the values from table', () => {
    const hashTable = new HashTable(5);
    expect(hashTable.getValues()).toEqual([]);

    hashTable.insert('A', 2);
    hashTable.insert('Aa', 1);
    expect(hashTable.getValues()).toEqual([2, 1]);

    hashTable.remove('A');
    expect(hashTable.getValues()).toEqual([1]);

    hashTable.insert('A', 2);
    hashTable.insert('C', 3);
    expect(hashTable.getValues()).toEqual([2, 1, 3]);
    expect(hashTable.getKeys()).toEqual(['Aa', 'A', 'C']);
  });
});
