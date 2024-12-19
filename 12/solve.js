import consola from 'consola';
import clipboard from 'clipboardy';

function triangle(n) {
  return (n * (n + 1)) / 2;
}

function divisors(n) {
  let divs = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divs += 2;
    }
  }
  return divs;
}

let i = 1;
while (true) {
  const n = triangle(i++);
  if (divisors(n) > 500) {
    consola.success('answer', n);
    clipboard.writeSync(n?.toString());
    break;
  }
}
