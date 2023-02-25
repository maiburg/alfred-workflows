import * as fs from 'fs';
import * as path from 'path';

export const fileHelper = {
  writeToFile: async (filePath, fileName, text) => {
    const file = path.join(filePath, fileName);
    text = fileExists(file) && fileHasContent(file) ? `\n${text}` : text;
    await fs.appendFile(file, text, (err) => {
      if (err) {
        return console.log(err);
      }
    });
  }
};

const fileExists = (file) => fs.existsSync(file);

const fileHasContent = (file) => {
  const stats = fs.statSync(file);
  return stats && stats.size;
};
