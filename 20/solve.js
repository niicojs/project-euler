import consola from 'consola';
import clipboard from 'clipboardy';
import { sum } from '../utils.js';

function divisors(n) {
  let divs = new Set([1]);
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divs.add(i);
      divs.add(n / i);
    }
  }
  return [...divs];
}

function d(n) {
  return sum(divisors(n));
}

const amicables = new Set();
for (let i = 0; i < 10_000; i++) {
  const a = d(i);
  const b = d(a);
  if (i === b && a !== b) {
    amicables.add(i);
    amicables.add(a);
  }
}

let answer = sum([...amicables]);
consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
