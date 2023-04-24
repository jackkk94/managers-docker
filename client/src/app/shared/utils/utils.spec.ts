import { createEntity, getFullDuration } from './utils';

describe('createEntity', () => {
  it('Test without parent', async () => {
    const actual = createEntity(undefined);

    expect(actual.id).toBeDefined();
    expect(typeof actual.id).toEqual('object');
    expect(actual.name).toBeDefined();
    expect(typeof actual.name).toEqual('string');
    expect(actual.parent).toBe(undefined);
  });

  it('Test with parent', async () => {
    const parent = createEntity(undefined);
    const actual = createEntity(parent);

    expect(actual).toBeDefined();
    expect(typeof actual).toEqual('object');
    expect(actual.parent).toBeDefined();
    expect(typeof actual.parent).toEqual('object');
    expect(actual.parent).toEqual(parent);
  });
});

describe('getFullDuration', () => {
  it('Test with empty array', async () => {
    const actual = getFullDuration([]);

    expect(actual).toBe(0);
  });

  it('Test with not empty array', async () => {
    const mockData = [
      {
        duration: 1.3,
        index: 1,
        start: 240,
      },
      {
        duration: 2,
        index: 2,
        start: 241.3,
      },
    ];

    const lastItem  =  mockData[mockData.length - 1];
    const expected = lastItem.duration + lastItem.start;
    const actual = getFullDuration(mockData);

    expect(actual).toBe(expected);
  });
});
