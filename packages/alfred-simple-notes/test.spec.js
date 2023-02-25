import { jest } from '@jest/globals';
import alfyTest from 'alfy-test';

import { datetimeHelper, fileHelper } from 'alfred-lib';

import { notes } from './notes.js';

describe('alfred-simple-notes', () => {
  describe('index', () => {
    test('Dummy test', async () => {
      const alfy = alfyTest();
      const result = await alfy('Add note');
      const expected = [
        { arg: 'Add note', subtitle: 'res', title: 'Add note' }
      ];

      expect(result).toEqual(expected);
    });
  });

  describe('writeNote', () => {
    test('call datetimeHelper.timestamp()', async () => {
      const spy = jest.spyOn(datetimeHelper, 'timestamp');

      await notes.writeNote('some text');

      expect(spy).toHaveBeenCalled();
    });

    test('call fileHelper.writeToFile()', async () => {
      const expected = [
        '/Users/alex/Documents',
        'notes.md',
        '* some text | timestamp'
      ];
      const spy = jest.spyOn(fileHelper, 'writeToFile');
      jest.spyOn(datetimeHelper, 'timestamp').mockReturnValue('timestamp');

      await notes.writeNote('some text');

      expect(spy).toHaveBeenCalledWith(...expected);
    });
  });
});
