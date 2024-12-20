import consola from 'consola';
import clipboard from 'clipboardy';
import { sum } from '../utils.js';

function* permutations(possible) {
  if (possible.length === 1) yield possible;
  else {
    for (let i = 0; i < possible.length; i++) {
      const newPossible = possible.filter((_, j) => i !== j);
      for (const permutation of permutations(newPossible)) {
        yield [possible[i], ...permutation];
      }
    }
  }
}

const all = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let i = 0;
for (const permutation of permutations(all)) {
  i++;
  if (i === 1_000_000) {
    consola.success('answer', permutation.join(''));
    clipboard.writeSync(permutation.join(''));
    break;
  }
}