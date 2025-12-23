export function fizzbuzz(number: number): string {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzbuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return String(number);
}

export function generateFizzBuzzSequence(): string[] {
  return Array.from({ length: 100 }, (_, index) => fizzbuzz(index + 1));
}

export function printFizzBuzz(): void {
  const sequence = generateFizzBuzzSequence();
  sequence.forEach((value) => console.log(value));
}
