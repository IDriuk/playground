/*
  166. Fraction to Recurring Decimal.
  Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
*/

export function fractionToDecimal(
  numerator: number,
  denominator: number,
): string {
  if (numerator == 0) {
    return "0";
  }

  let fraction: string[] = [];

  if (numerator * denominator < 0) {
    fraction.push("-");
  }

  let divident = Math.abs(numerator);
  let divisor = Math.abs(denominator);

  fraction.push(`${Math.floor(divident / divisor)}`);
  let remainder = divident % divisor;

  if (remainder == 0) {
    return fraction.join("");
  }

  fraction.push(".");

  let map = new Map<number, number>();

  while (remainder != 0) {
    if (map.has(remainder)) {
      fraction.splice(map.get(remainder)!, 0, "(");
      fraction.push(")");
      break;
    }
    map.set(remainder, fraction.length);
    remainder *= 10;
    fraction.push(`${Math.floor(remainder / divisor)}`);
    remainder %= divisor;
  }

  return fraction.join("");
}
