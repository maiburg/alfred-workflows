import alfy from 'alfy';
import { notes } from './notes.js';

const main = async () => {
  const { varFile } = process.env;
  const text = alfy.input.trim();
  const args = [text, varFile || '/tmp/notes.md'];
  const res = await notes.writeNote(...args);
  const subtitle = 'res';
  const title = 'Add note';
  const arg = title;

  alfy.output([{ title, subtitle, arg }]);
};

void main();
