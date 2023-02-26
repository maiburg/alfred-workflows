import alfyTest from 'alfy-test';

describe('index', () => {
  test('Dummy test', async () => {
    const alfy = alfyTest();
    const result = await alfy('Add note');
    const expected = [{ arg: 'Add note', subtitle: 'res', title: 'Add note' }];

    expect(result).toEqual(expected);
  });
});
