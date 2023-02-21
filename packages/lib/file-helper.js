import fs from 'fs';
import path from 'path';

const fileExists = (file) => fs.existsSync(file);
const fileHasContent = (file) => {
  const stats = fs.statSync(file);
  return stats && stats.size;
};

const writeToFile = async (filePath, fileName, text) => {
  const file = path.join(filePath, fileName);
  text = fileExists(file) && fileHasContent(file) ? `\n${text}` : text;

  await fs.appendFile(file, text, (err) => {
    if (err) {
      return console.log(err);
    }
  });
};

export { writeToFile };
