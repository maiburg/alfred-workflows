import alfy from 'alfy';
import { notes } from './notes.js';

(async () => {
  const text = alfy.input.trim();
  const title = 'Add note';
  const res = await notes.writeNote(text);
  const subtitle = 'res';
  const arg = title;

  alfy.output([{ title, subtitle, arg }]);
})();
