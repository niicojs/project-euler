import consola from 'consola';
import clipboard from 'clipboardy';
import { memoize } from '../utils.js';

const target = 600851475143;

function findFactors(n) {
  const factors = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  return factors;
}

const answer = Math.max(...findFactors(target));

consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
