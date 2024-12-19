import consola from 'consola';
import clipboard from 'clipboardy';
import { getDataLines } from '../utils.js';

const TARGET = 13;
const prod = (i) => {
  let p = 1;
  for (let j = 0; j < TARGET; j++) {
    p *= numbers[i + j];
  }
  return p;
};

const numbers = getDataLines().join('').split('').map(Number);
let answer = 0;
for (let i = 0; i < numbers.length - TARGET + 1; i++) {
  let p = prod(i);
  if (p > answer) answer = p;
}

consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
