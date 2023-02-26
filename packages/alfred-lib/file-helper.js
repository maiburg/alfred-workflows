import * as fs from 'fs';

export const fileHelper = {
  writeToFile: async (file, text) => {
    text = fileHelper.fileHasContent(file) ? `\n${text}` : text;

    await fs.promises.appendFile(file, text, (err) => {
      err && console.log(err);
    });
  },

  fileHasContent: (file) => {
    if (!fs.existsSync(file)) return false;
    const stats = fs.statSync(file);
    return stats && stats.size;
  }
};
