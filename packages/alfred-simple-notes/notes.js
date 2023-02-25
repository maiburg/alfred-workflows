import { fileHelper, datetimeHelper } from 'alfred-lib';
export const notes = {
    getNotes: () => {
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
    },
    writeNote: async (text) => {
        const filePath = '/Users/alex/Documents';
        const fileName = 'notes.md';
        text = `* ${text} | ${datetimeHelper.timestamp()}`;
        return await fileHelper.writeToFile(filePath, fileName, text);
    }
};
