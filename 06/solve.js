import consola from 'consola';
import clipboard from 'clipboardy';

function sumsquares(n) {
  return n * (n + 1) * (2 * n + 1) / 6;
}

function squaresum(n) {
  return Math.pow(n * (n + 1) / 2, 2);
}

let answer = squaresum(100) - sumsquares(100);

consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
