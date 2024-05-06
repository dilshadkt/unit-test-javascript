import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

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
