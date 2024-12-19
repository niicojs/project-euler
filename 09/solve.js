import consola from 'consola';
import clipboard from 'clipboardy';
import { getDataLines } from '../utils.js';

function isTriplet(a, b, c) {
  return a * a + b * b === c * c;
}

function* next() {
  for (let a = 1; a < 1000; a++) {
    for (let b = 1; b < 1000; b++) {
      let c = 1000 - a - b;
      yield [a, b, c];
    }
  }
}

for (const [a, b, c] of next()) {
  if (isTriplet(a, b, c)) {
    consola.success('answer', a * b * c);
    clipboard.writeSync((a * b * c).toString());
    break;
  }
}
