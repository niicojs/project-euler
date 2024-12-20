import consola from 'consola';
import clipboard from 'clipboardy';

const leep = (y) => y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);

const daysinnomths = (y, m) => {
  const days = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  if (m === 2 && leep(y)) return 29;
  else return days[m];
};

function usingcode() {
  let res = 0;

  const days = {};
  // init
  days[1900] = {};
  days[1900][1] = 1;
  for (let month = 2; month <= 12; month++) {
    days[1900][month] =
      (days[1900][month - 1] + daysinnomths(1900, month - 1)) % 7;
  }

  for (let year = 1901; year <= 2000; year++) {
    days[year] = {};
    days[year][1] = (days[year - 1][12] + daysinnomths(year - 1, 12)) % 7;
    if (days[year][1] === 0) res++;
    for (let month = 2; month <= 12; month++) {
      days[year][month] =
        (days[year][month - 1] + daysinnomths(year, month - 1)) % 7;
      if (days[year][month] === 0) res++;
    }
  }
  return res;
}

function usingdates() {
  let res = 0;
  for (let year = 1901; year <= 2000; year++) {
    for (let month = 1; month <= 12; month++) {
      if (new Date(year, month, 1).getDay() === 0) res++;
    }
  }
  return res;
}

consola.log('using dates', usingdates());

let answer = usingcode();
consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
