import consola from 'consola';
import clipboard from 'clipboardy';

function collatz(n) {
  let count = 1;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    count++;
  }
  return count;
}

let best = 0;
let answer = 0;
for (let i = 1; i < 1_000_000; i++) {
  const c = collatz(i);
  if (c > best) {
    best = c;
    answer = i;  
  }
}

consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
