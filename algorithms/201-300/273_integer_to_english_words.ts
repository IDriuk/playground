/*
  273. Integer to English Words
  Convert a non-negative integer to its english words representation.
*/

const LESS_THAN_TWENTY = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];

const TENS = [
  "",
  "Ten",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

const THOUSANDS = ["", "Thousand", "Million", "Billion"];

export function numberToWords(num: number) {
  if (num == 0) {
    return LESS_THAN_TWENTY[0];
  }

  let i = 0;
  let res: string[] = [];
  while (num > 0) {
    let hundreds = num % 1000;
    if (hundreds != 0) {
      if (i == 0) {
        res.push(hundredsToWords(hundreds));
      } else {
        if (res.length != 0) {
          res.unshift(" ");
        }
        res.unshift(THOUSANDS[i]);
        res.unshift(" ");
        res.unshift(hundredsToWords(hundreds));
      }
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return res.join("");
}

function hundredsToWords(n: number): string {
  if (n == 0) {
    return "";
  }
  if (n < 20) {
    return LESS_THAN_TWENTY[n];
  }
  if (n < 100) {
    let units = hundredsToWords(n % 10);
    return TENS[Math.floor(n / 10)] + (units.length == 0 ? "" : " " + units);
  }
  let tens = hundredsToWords(n % 100);
  return (
    LESS_THAN_TWENTY[Math.floor(n / 100)] +
    " " +
    "Hundred" +
    (tens.length == 0 ? "" : " " + tens)
  );
}
