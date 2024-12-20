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

let abundants = [];
for (let i = 1; i <= 28_123; i++) {
  const abundant = d(i) > i;
  if (abundant) abundants.push(i);
}

let sums = new Set();
for (let i = 0; i < abundants.length; i++) {
  for (let j = i; j < abundants.length; j++) {
    sums.add(abundants[i] + abundants[j]);
  }
}

let answer = 0;
for (let i = 1; i <= 28_123; i++) {
  if (!sums.has(i)) answer += i;
}

consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
