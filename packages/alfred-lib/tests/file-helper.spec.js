import mock from 'mock-fs';
import * as fs from 'fs';
import { jest } from '@jest/globals';

import { fileHelper } from '../file-helper.js';

describe('fileHelper', () => {
  const file = `/tmp/notes.md`;
  const text = 'some text';

  describe('writeToFile() should', () => {
    test('call fileHasContent()', async () => {
      const spy = jest.spyOn(fileHelper, 'fileHasContent');

      await fileHelper.writeToFile(file, text);

      expect(spy).toHaveBeenCalledWith(file);
    });

    test('write to file', async () => {
      // Unit testing Node.js fs with mock-fs: https://www.emgoto.com/nodejs-mock-fs/
      mock({ '/tmp': { 'notes.md': '' } });

      await fileHelper.writeToFile(file, text);

      expect(fs.readFileSync(file, 'utf8')).toEqual(text);
    });

    test('prepend a linebreak if file has content', async () => {
      const expected = '1st line\n' + text;
      mock({ '/tmp': { 'notes.md': '1st line' } });

      await fileHelper.writeToFile(file, text);

      expect(fs.readFileSync(file, 'utf8')).toEqual(expected);
    });
  });

  describe('fileHasContent() should', () => {
    test('return FALSE if file is empty', () => {
      mock({ '/tmp': { 'notes.md': '' } });

      expect(fileHelper.fileHasContent(file)).toBeFalsy();
    });

    test('return TRUE if file is NOT empty', () => {
      mock({ '/tmp': { 'notes.md': 'some text' } });

      expect(fileHelper.fileHasContent(file)).toBeTruthy();
    });
  });
});
