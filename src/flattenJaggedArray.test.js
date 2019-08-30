const flattenJaggedArray = require('./flattenJaggedArray');

describe('Flattens a jagged multi-dimensional array', () => {
  test('Correctly Flattens a jagged multi-dimensional array', () => {
    const jaggedArray = [[1,2,[3]],4];
    const result = [];

    flattenJaggedArray(jaggedArray, result);

    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('Gracefully completes if the source specified is not an Array ', () => {
    let source;
    let result = [];

    flattenJaggedArray(source, result);

    expect(result).toEqual([]);
  });

  test('Gracefully completes if the destination specified is not an Array ', () => {
    const jaggedArray = [[1,2,[3]],4];
    let result;

    flattenJaggedArray(jaggedArray, result);

    expect(result).toBeUndefined();
  });
});