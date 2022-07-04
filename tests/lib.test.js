const lib = require("../lib");

describe("Absolute", () => {
  it("Absolute - should return a positive number if input is positive.", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("Absolute - should return a positive number if input is negative.", () => {
    const result = lib.absolute(-1);
    console.log(result);
    expect(result).toBe(1);
  });

  it("Absolute - should return 0 if input is 0.", () => {
    const result = lib.absolute(0);
    console.log(result);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greeting message.", () => {
    const result = lib.greet("Olasoft");
    expect(result).toMatch(/Olasoft/);
    expect(result).toContain("Olasoft");
  });
});
