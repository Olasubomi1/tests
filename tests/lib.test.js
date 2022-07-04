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

describe("getCurrencies", () => {
  it("should return supported currencies.", () => {
    const result = lib.getCurrencies();

    // Ideal way
    expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));

    /**
    // Too general
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // Too Specific
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result.length).toBe(3);

    // proper way
    expect(result).toContain("USD");
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");
    */
  });
});

describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = lib.getProduct(1);

    // proper way
    expect(result).toMatchObject({ id: 1, price: 10 });
    /**
    //  too specific
     expect(result).toEqual({ id: 1, price: 10 });
    //  too general 
     expect(result).toHaveProperty("id", 1);
     */
  });
});
