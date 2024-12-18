import consola from 'consola';
import clipboard from 'clipboardy';
import { sum } from '../utils.js';

let i = 0;
const found = [];
while (i < 1000) {
  if (i % 3 === 0 || i % 5 === 0 || i % 9 === 0) found.push(i);
  i++;
}

let answer = sum(found);
consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
