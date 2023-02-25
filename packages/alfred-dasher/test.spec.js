import alfyTest from 'alfy-test';

test('Return the right result', async () => {
  const alfy = alfyTest();
  const input =
    '„Fix    Schwyz!“ !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~quäkt Jürgen blöd vom Paß ÄÖÜ.';
  const output = 'fix-schwyz-quaekt-juergen-bloed-vom-pass-ae-oe-ue';

  const result = await alfy(input);

  expect(result).toEqual([
    {
      title: output,
      subtitle: input + ' => ' + output,
      arg: output,
      icon: { type: 'fileicon', path: '~/Desktop' }
    }
  ]);

});
