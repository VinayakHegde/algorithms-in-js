const LinearSearch = props => {
  const valueAtIndeces = [];
  if (!props) return valueAtIndeces;
  const { list, value } = props;
  if (list === undefined || !list.length || value === undefined) {
    return valueAtIndeces;
  }
  const isValueObj = typeof value === 'object';
  const valKey = isValueObj ? Object.keys(value)[0] : null;
  const seekVal = isValueObj ? Object.values(value)[0] : value;

  for (let index = 0; index < list.length; index++) {
    let found = list[index];
    if (typeof found === 'object' && isValueObj) {
      found = found[valKey];
    }

    if (seekVal === found) {
      valueAtIndeces.push(index);
    }
  }

  return valueAtIndeces;
};

export default LinearSearch;
