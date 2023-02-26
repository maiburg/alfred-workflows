import * as fs from 'fs';

export const fileHelper = {
  writeToFile: async (file, text) => {
    text =
      fileExists(file) && fileHelper.fileHasContent(file) ? `\n${text}` : text;

    await fs.promises.appendFile(file, text, (err) => {
      if (err) {
        return console.log(err);
      }
    });
  },

  fileHasContent: (file) => {
    if (!fileExists(file)) return false;
    const stats = fs.statSync(file);
    return stats && stats.size;
  }
};

const fileExists = (file) => fs.existsSync(file);
