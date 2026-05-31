const romanMap: [string, number][] = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
];

const toRoman = (num: number) => {
  let result = '';
  for (const [roman, val] of romanMap) {
    while (num >= val) {
      result += roman;
      num -= val;
    }
  }
  return result;
};

const toRomanNumeral = (date: string | null) => {
  if (!date) return '';

  return date.split(/\D+/).filter(Boolean).map(Number).map(toRoman).join(' ');
};

export { toRomanNumeral };
