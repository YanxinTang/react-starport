import * as utils from '../utils';

describe('test utils', () => {
  test('pickBy', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };

    // pick by key
    expect(utils.pickBy(obj, key => key === 'a')).toStrictEqual({ a: 1 });

    // pick by value
    expect(utils.pickBy(obj, (key, value) => value > 1)).toStrictEqual({
      b: 2,
      c: 3,
    });
  });
});
