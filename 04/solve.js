import consola from 'consola';
import clipboard from 'clipboardy';

const isPalindrome = (n) =>
  n.toString() === n.toString().split('').reverse().join('');

function* next() {
  for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
      yield [i, j];
    }
  }
}

let best = 0;
for (const [i, j] of next()) {
  const product = i * j;
  if (isPalindrome(product) && product > best) {
    best = product;
  }
}

consola.success('answer', best);
clipboard.writeSync(best?.toString());

