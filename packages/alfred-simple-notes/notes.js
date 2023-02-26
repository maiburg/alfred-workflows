import path from 'path';

import { datetimeHelper, fileHelper } from 'alfred-lib';

const filePath = '/Users/alex/Documents';
const fileName = 'notes.md';

export const notes = {
  writeNote: async (text) => {
    const file = path.join(filePath, fileName);

    text = getText(file, text);
    return await fileHelper.writeToFile(file, text);
  }
};

const getText = (file, text) => {
  text = text.trim();

  return fileHelper.fileHasContent(file)
    ? `* ${text} | ${datetimeHelper.getTimestamp()}`
    : `# ${datetimeHelper.getDate()}`;
};
