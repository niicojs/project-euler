import consola from 'consola';
import clipboard from 'clipboardy';
import { memoize } from '../utils.js';

const factorialize = memoize((num) => {
  if (num === 0) return 1n;
  return BigInt(num) * factorialize(num - 1);
});

let answer = 0;
let str = factorialize(100).toString();
for (let i = 0; i < str.length; i++) {
  answer += +str[i];
}

consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
