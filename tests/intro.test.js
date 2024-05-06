import { describe, test, it, expect } from "vitest";
import { Average, Factorial, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return first arguments if it is higher", () => {
    // //AAA concept

    // //Arrange
    // const a = 2;
    // const b = 1;
    // //Act
    // const result = max(a, b);
    // //Assertion
    // expect(result).toBe(2);

    expect(max(2, 1)).toBe(2);
  });
  it("should return second argument if it is higher", () =>
    expect(max(1, 2)).toBe(2));
  it("should be first argument if both arguments are eqaul", () => {
    expect(max(2, 2)).toBe(2);
  });
});

describe("fizBuzz", () => {
  it("it should return FizzBuzz if it is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("it should return Fizz if it  is divisible by 3 ", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("should return Buzz if it is divisible by 5 ", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("should return the number as string if it is not divisible by 3 and 5", () => {
    expect(fizzBuzz(2)).toBe("2");
  });
});

describe("average", () => {
  it("the average should be NaN if it is any empty arr", () => {
    expect(Average([])).toBe(NaN);
  });
  it("the average should be the value if the arr is an single element array", () => {
    expect(Average([1])).toBe(1);
  });
  it("should return average of 2 value array", () => {
    expect(Average([1, 2])).toBe(1.5);
  });
  it("should return the average of array with 3 elements", () => {
    expect(Average([1, 2, 3])).toBe(2);
  });
});

describe("Factorial", () => {
  it("should return 1 if the input is 0", () => {
    expect(Factorial(0)).toBe(1);
  });
  it("should return 1 if the input is 1", () => {
    expect(Factorial(1)).toBe(1);
  });
  it("should return 6 if it return 6", () => {
    expect(Factorial(3)).toBe(6);
  });
  it("should be undefined if it return negative number", () => {
    expect(Factorial(-1)).toBe(undefined);
  });
});
