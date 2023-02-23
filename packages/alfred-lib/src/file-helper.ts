import fs, { PathLike } from 'fs';
import path from 'path';

const fileExists = (file: PathLike) => fs.existsSync(file);
const fileHasContent = (file: PathLike) => {
  const stats = fs.statSync(file);
  return stats && stats.size;
};

const writeToFile = async (filePath: string, fileName: string, text: string) => {
  const file = path.join(filePath, fileName);
  text = fileExists(file) && fileHasContent(file) ? `\n${text}` : text;

  await fs.appendFile(file, text, (err) => {
    if (err) {
      return console.log(err);
    }
  });
};

export { writeToFile };
