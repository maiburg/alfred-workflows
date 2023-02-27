import { datetimeHelper, fileHelper } from 'alfred-lib';

export const notes = {
  writeNote: async (text, file) => {
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
