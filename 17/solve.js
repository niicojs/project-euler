import consola from 'consola';
import clipboard from 'clipboardy';

function numToText(n) {
  if (n === 1000) return 'one thousand';
  const txtunite = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ];
  const txtdizaine = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const centaine = Math.floor(n / 100);
  const remains = n % 100;
  if (centaine) {
    return (
      txtunite[centaine] +
      ' hundred' +
      (remains ? ' and ' + numToText(remains) : '')
    );
  }

  const dizaine = Math.floor((n % 100) / 10);
  if (remains < 20) {
    return txtunite[n % 100];
  } else {
    return txtdizaine[dizaine] + ' ' + txtunite[n % 10];
  }
}

function size(n) {
  return numToText(n).replace(/\s/g, '').length;
}

let answer = 0;
for (let i = 1; i <= 1000; i++) {
  answer += size(i);
}

consola.success('answer', answer);
clipboard.writeSync(answer?.toString());
