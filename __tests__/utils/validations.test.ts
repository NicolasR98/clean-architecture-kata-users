import { isStringEmpty, validateRegexp } from "../../utils/validations";

describe("validateRegexp function", () => {
  it("should return true for a matching pattern", () => {
    const pattern = /^[a-zA-Z]+$/;
    const text = "Hello";
    expect(validateRegexp(pattern, text)).toBe(true);
  });

  it("should return false for a non-matching pattern", () => {
    const pattern = /^[0-9]+$/;
    const text = "Hello";
    expect(validateRegexp(pattern, text)).toBe(false);
  });

  it("should return false for an empty text", () => {
    const pattern = /^[a-zA-Z]+$/;
    const text = "";
    expect(validateRegexp(pattern, text)).toBe(false);
  });
});

describe("isStringEmpty function", () => {
  it("should return true for an empty string", () => {
    const str = "";
    expect(isStringEmpty(str)).toBe(true);
  });

  it("should return true for a string with only spaces", () => {
    const str = "     ";
    expect(isStringEmpty(str)).toBe(true);
  });

  it("should return false for a non-empty string", () => {
    const str = "Hello";
    expect(isStringEmpty(str)).toBe(false);
  });
});
