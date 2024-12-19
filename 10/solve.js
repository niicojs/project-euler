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

let answer = 0;
let n = 1;
while (n < 2_000_000) {
  if (isPrime(n)) answer += n;
  n++;
}

consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
