import alfy from 'alfy';
import { writeNote } from './notes.js';

(async () => {
  const text = alfy.input.trim();
  const title = 'Add note';
  const res = await writeNote(text);
  const subtitle = 'res';
  const arg = title;

  alfy.output([{ title, subtitle, arg }]);
})();
