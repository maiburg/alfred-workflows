import { datetimeHelper, fileHelper } from 'alfred-lib';

export const notes = {
  writeNote: async (text, file) => {
    text = getText(file, text);
    return await fileHelper.writeToFile(file, text);
  }
};

const getText = (file, text) => {
  const task = `* ${text.trim()} | ${datetimeHelper.getTimestamp()}`;

  return fileHelper.fileHasContent(file)
    ? task
    : `# ${datetimeHelper.getDate()}\n${task}`;
};
