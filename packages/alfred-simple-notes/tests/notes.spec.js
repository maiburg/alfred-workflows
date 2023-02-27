import { jest } from '@jest/globals';

import { datetimeHelper, fileHelper } from 'alfred-lib';

import { notes } from '../notes.js';

describe('notes', () => {
  const text = 'some text';
  const file = '/tmp/notes.md';

  describe('writeNote', () => {
    test('call datetimeHelper.getTimestamp() if file exists', async () => {
      jest.spyOn(fileHelper, 'fileHasContent').mockReturnValue(true);
      const spy = jest.spyOn(datetimeHelper, 'getTimestamp');

      await notes.writeNote(text, file);

      expect(spy).toHaveBeenCalled();
    });

    test('call fileHelper.writeToFile() if file exists', async () => {
      jest.spyOn(fileHelper, 'fileHasContent').mockReturnValue(true);
      const expected = [
        '/tmp/notes.md',
        '* some text | timestamp'
      ];
      const spy = jest.spyOn(fileHelper, 'writeToFile');
      jest.spyOn(datetimeHelper, 'getTimestamp').mockReturnValue('timestamp');

      await notes.writeNote(text, file);

      expect(spy).toHaveBeenCalledWith(...expected);
    });

    test('call datetimeHelper.getDate() if file exists', async () => {
      jest.spyOn(fileHelper, 'fileHasContent').mockReturnValue(false);
      const spy = jest.spyOn(datetimeHelper, 'getDate');

      await notes.writeNote(text, file);

      expect(spy).toHaveBeenCalled();
    });

    test('call fileHelper.writeToFile() if file exists', async () => {
      jest.spyOn(fileHelper, 'fileHasContent').mockReturnValue(false);
      const expected = ['/tmp/notes.md', '# date'];
      const spy = jest.spyOn(fileHelper, 'writeToFile');
      jest.spyOn(datetimeHelper, 'getDate').mockReturnValue('date');

      await notes.writeNote(text, file);

      expect(spy).toHaveBeenCalledWith(...expected);
    });
  });
});
