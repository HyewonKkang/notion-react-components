/* eslint-disable no-param-reassign */

function numberToAlphabet(n: number): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  while (n > 0) {
    const remainder = (n - 1) % 26;
    result = alphabet[remainder] + result;
    n = Math.floor((n - 1) / 26);
  }

  return result;
}

function numberToRoman(n: number): string {
  const romanNumerals = [
    { value: 1000, symbol: 'm' },
    { value: 900, symbol: 'cm' },
    { value: 500, symbol: 'd' },
    { value: 400, symbol: 'cd' },
    { value: 100, symbol: 'c' },
    { value: 90, symbol: 'xc' },
    { value: 50, symbol: 'l' },
    { value: 40, symbol: 'xl' },
    { value: 10, symbol: 'x' },
    { value: 9, symbol: 'ix' },
    { value: 5, symbol: 'v' },
    { value: 4, symbol: 'iv' },
    { value: 1, symbol: 'i' },
  ];

  let result = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const numeral of romanNumerals) {
    const { value, symbol } = numeral;
    while (n >= value) {
      result += symbol;
      n -= value;
    }
  }

  return result;
}

export { numberToAlphabet, numberToRoman };
