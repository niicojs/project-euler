import consola from 'consola';
import clipboard from 'clipboardy';
import { memoize } from '../utils.js';

const big = (2n ** 1000n).toString();
let answer = 0;
for (let i = 0; i < big.length; i++) {
  answer += +big[i];
}

consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
