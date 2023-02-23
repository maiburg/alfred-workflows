import { getTimeStamp, writeToFile } from 'alfred-lib';

const getNotes = () => {
  return [
    {
      title: 'Note 1',
      subtitle: 'This is the first note',
      arg: 'note1'
    },
    {
      title: 'Note 2',
      subtitle: 'This is the second note',
      arg: 'note2'
    }
  ];
};

const writeNote = async (text: string) => {
  const filePath = '/Users/alex/Documents';
  const fileName = 'notes.md';
  text = `* ${text} | ${getTimeStamp()}`;

  return await writeToFile(filePath, fileName, text);
};

export { getNotes, writeNote };
