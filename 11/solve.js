import consola from 'consola';
import clipboard from 'clipboardy';
import { getDataLines, nums } from '../utils.js';

const grid = getDataLines().map(nums);
let [w, h] = [grid[0].length, grid.length];

let answer = 0;
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    // horizontal
    if (x + 3 < w) {
      let p = grid[y][x] * grid[y][x + 1] * grid[y][x + 2] * grid[y][x + 3];
      if (p > answer) answer = p;
    }
    // vertical
    if (y + 3 < h) {
      let p = grid[y][x] * grid[y + 1][x] * grid[y + 2][x] * grid[y + 3][x];
      if (p > answer) answer = p;
    }
    // diagonal
    if (x + 3 < w && y + 3 < h) {
      let p =
        grid[y][x] *
        grid[y + 1][x + 1] *
        grid[y + 2][x + 2] *
        grid[y + 3][x + 3];
      if (p > answer) answer = p;
    }
    // other diagonal
    if (x - 3 >= 0 && y + 3 < h) {
      let p =
        grid[y][x] *
        grid[y + 1][x - 1] *
        grid[y + 2][x - 2] *
        grid[y + 3][x - 3];
      if (p > answer) answer = p;
    }
  }
}

consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
