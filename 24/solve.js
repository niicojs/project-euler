import consola from 'consola';
import clipboard from 'clipboardy';
import { memoize } from '../utils.js';

const fib = memoize((n) => (n <= 1 ? BigInt(n) : fib(n - 1) + fib(n - 2)));

let i = 0;
while (true) {
  const val = fib(++i);
  if (val.toString().length >= 1000) {
    consola.success('answer', i);
    clipboard.writeSync(i.toString());
    break;
  }
}
