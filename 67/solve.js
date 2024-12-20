import consola from 'consola';
import clipboard from 'clipboardy';
import { getDataLines, memoize, nums } from '../utils.js';

const lines = getDataLines().map(nums);

const search = memoize((line, i) => {
  if (line === lines.length - 1) return lines[line][i];
  const left = search(line + 1, i);
  const right = search(line + 1, i + 1);
  return lines[line][i] + Math.max(left, right);
})

let answer = search(0, 0);
consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
