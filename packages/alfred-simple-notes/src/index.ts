import alfy from 'alfy';
import { writeNote } from './notes.js';

(async () => {
  const text = alfy.input.trim();
  const title = 'Add note';
  const res = await writeNote(text);
  const subtitle = 'res';
  const arg = title;
  const icon = { type: 'fileicon', path: '~/Desktop' };

  alfy.output([{ title, subtitle, arg, icon }]);
})();
