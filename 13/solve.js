import consola from 'consola';
import clipboard from 'clipboardy';
import { getDataLines } from '../utils.js';

let sum = 0n;
const lines = getDataLines();
for (const line of lines) {
  sum += BigInt(line);
}

let answer = sum.toString().slice(0, 10);
consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
