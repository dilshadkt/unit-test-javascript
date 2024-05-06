// Lesson: Writing your first tests
export function max(a, b) {
  if (a > b) return a;
  else if (b > a) return b;
  return a;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

/// Exercise 3
export function Average(numbers) {
  if (numbers.length === 0) return NaN;
  const sum = numbers.reduce((sum, current) => sum + current, 0);
  return sum / numbers.length;
}

/// Exercise 4
export function Factorial(number) {
  if (number < 0) return undefined;
  if (number === 0) return 1;
  return number * Factorial(number - 1);
}
