import consola from 'consola';
import clipboard from 'clipboardy';

function isPrime(n) {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
  if (n % 2 == 0) return n == 2;
  if (n % 3 == 0) return n == 3;
  var m = Math.sqrt(n);
  for (var i = 5; i <= m; i += 6) {
    if (n % i == 0) return false;
    if (n % (i + 2) == 0) return false;
  }
  return true;
}

let i = 0;
let n = 1;
while (i < 10001) {
  if (isPrime(n)) i++;
  n++;
}

let answer = n - 1;

consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
