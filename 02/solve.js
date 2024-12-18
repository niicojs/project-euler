import consola from 'consola';
import clipboard from 'clipboardy';
import { memoize } from '../utils.js';

const fib = memoize((n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));

const MAX = 4_000_000;

let answer = 0;
let i = 2;
while (true) {
  const f = fib(i);
  if (f > MAX) break;
  if (f % 2 === 0) answer += f;
  i++;
}

consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
