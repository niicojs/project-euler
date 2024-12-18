import consola from 'consola';
import clipboard from 'clipboardy';

let x = 1;
while (true) {
  let ok = true;
  for (let i = 1; i < 20; i++) {
    if (x % i !== 0) {
      ok = false;
      break;
    }
  }
  if (ok) break;
  x++;
}

consola.success('answer', x);
clipboard.writeSync(x?.toString());
