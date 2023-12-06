import fill from '../index.js'

let arr;

beforeEach(() => {
  arr = [1, 2, 3, 4];
});

test('fill', () => {
  expect(fill([...arr], '*')).toEqual(['*', '*', '*', '*']);
  expect(fill([...arr], '*', 1, 3)).toEqual([1, '*', '*', 4]);
  expect(fill([...arr], '*', 4)).toEqual([1, 2, 3, 4]);
  expect(fill([...arr], '*', 0, 10)).toEqual(['*', '*', '*', '*']);

  expect(fill([...arr], 0, 1, 3)).toEqual([1, 0, 0, 4]);
  expect(fill([...arr], undefined, 1, 3)).toEqual([1, undefined, undefined, 4]);
  expect(fill([...arr], [1], 1, 3)).toEqual([1, [1], [1], 4]);
  expect(fill([...arr], { chel: 'aboba' }, 1, 3)).toEqual([1, { chel: 'aboba' }, { chel: 'aboba' }, 4]);
  expect(fill([...arr], null, 1, 3)).toEqual([1, null, null, 4]);
});