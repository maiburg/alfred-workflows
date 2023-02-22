import test from 'ava';
import alfyTest from 'alfy-test';

test('Dummy test', async (t) => {
  const alfy = alfyTest();
  const result = await alfy('Add note');

  t.deepEqual(result, [
    { arg: 'Add note', subtitle: 'res', title: 'Add note' }
  ]);
});
