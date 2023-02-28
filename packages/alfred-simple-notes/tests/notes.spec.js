import { jest } from '@jest/globals';

import { datetimeHelper, fileHelper } from 'alfred-lib';

import { notes } from '../notes.js';

describe('notes', () => {
  const text = 'some text';
  const file = '/tmp/notes.md';
  const date = '01.01.2000';
  const timestamp = '01.01.2000 00:00:00';
  let writeToFileSpy, getDateSpy, getTimestampSpy;

  beforeEach(() => {
    writeToFileSpy = jest.spyOn(fileHelper, 'writeToFile');
    getTimestampSpy = jest
      .spyOn(datetimeHelper, 'getTimestamp')
      .mockReturnValue(timestamp);
    getDateSpy = jest.spyOn(datetimeHelper, 'getDate').mockReturnValue(date);
  });

  describe('writeNote()', () => {
    test('write note WITH header if file has NO content', async () => {
      jest.spyOn(fileHelper, 'fileHasContent').mockReturnValue(false);
      const expected = [file, `# ${date}\n* some text | ${timestamp}`];

      await notes.writeNote(text, file);

      expect(getTimestampSpy).toHaveBeenCalled();
      expect(getDateSpy).toHaveBeenCalled();
      expect(writeToFileSpy).toHaveBeenCalledWith(...expected);
    });

    test('write note WITHOUT header if file has content', async () => {
      jest.spyOn(fileHelper, 'fileHasContent').mockReturnValue(true);
      const expected = [file, `* some text | ${timestamp}`];

      await notes.writeNote(text, file);

      expect(getTimestampSpy).toHaveBeenCalled();
      expect(getDateSpy).not.toHaveBeenCalled();
      expect(writeToFileSpy).toHaveBeenCalledWith(...expected);
    });
  });
});
