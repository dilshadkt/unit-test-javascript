import { describe, test, it, expect } from "vitest";
import { fizzBuzz, max } from "../src/intro";

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
});
