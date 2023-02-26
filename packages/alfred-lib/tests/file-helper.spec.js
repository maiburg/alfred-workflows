import mock from 'mock-fs';
import * as fs from 'fs';
import { jest } from '@jest/globals';

import { fileHelper } from '../file-helper.js';

describe('fileHelper', () => {
  describe('writeToFile should', () => {
    const text = 'some text';

    test('call fileHasContent()', async () => {
      const spy = jest.spyOn(fileHelper, 'fileHasContent');

      await fileHelper.writeToFile('file', text);

      expect(spy).toHaveBeenCalledWith('file');
    });

    test('call fs.appendFile()', async () => {
      mock({ '/tmp': { 'notes.md': '' } });

      const file = `/tmp/notes.md`;

      await fileHelper.writeToFile(file, text);

      expect(fs.readFileSync(file, 'utf8')).toEqual(text);
    });
  });
});
