const exercise = require("../exercise1");

describe("fizzBuzz", () => {
  it("should throw error if input is not a number", () => {
    expect(() => exercise.fizzBuzz("a")).toThrow();
    expect(() => exercise.fizzBuzz(null)).toThrow();
    expect(() => exercise.fizzBuzz(undefined)).toThrow();
    expect(() => exercise.fizzBuzz(false)).toThrow();
  });

  it("should return fizzbuzz if input is divisible by 3 and 5", () => {
    const result = exercise.fizzBuzz(15);
    expect(result).toContain("FizzBuzz");
  });

  it("should return fizz if input is divisible only by 3", () => {
    const result = exercise.fizzBuzz(9);
    expect(result).toMatch(/Fizz/);
  });

  it("should return Bizz if input is divisible only by 5", () => {
    const result = exercise.fizzBuzz(10);
    expect(result).toBe("Buzz");
  });

  it("should return input if input is not divisible by 3 and 5", () => {
    const result = exercise.fizzBuzz(1);
    expect(result).toBe(1);
  });
});
