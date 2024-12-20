import consola from 'consola';
import clipboard from 'clipboardy';
import { getRawData, memoize } from '../utils.js';

const value = (str) => {
  let sum = 0;
  let A = 'A'.charCodeAt(0);
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i) - A + 1;
  }
  return sum;
};
const names = getRawData().slice(1, -1).split('","').sort();

let answer = 0;
for (const [i, name] of names.entries()) {
  answer += value(name) * (i + 1);
}

consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
