import consola from 'consola';
import clipboard from 'clipboardy';
import { memoize } from '../utils.js';

const factorialize = memoize((num) => {
  if (num === 0) return 1;
  return num * factorialize(num - 1);
});

const binomialCoeff = (n, k) =>
  factorialize(n) / (factorialize(k) * factorialize(n - k));

const answer = binomialCoeff(20 + 20, 20);

consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
