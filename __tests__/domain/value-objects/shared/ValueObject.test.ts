import { ValueObject } from "../../../../domain/value-objects/shared/ValueObject";

class TestValueObject extends ValueObject<{ value: number }> {}

const valueObjectData = { value: 1 };
const valueObject = new TestValueObject(valueObjectData);

describe("ValueObject", () => {
  describe("Create instance", () => {
    it("should create an instance of ValueObject", () => {
      expect(valueObject).toBeInstanceOf(ValueObject);
    });
  });

  describe("equals method", () => {
    it("should return true when comparing two equal value objects", () => {
      const valueObject2 = new TestValueObject(valueObjectData);
      expect(valueObject.equals(valueObject2)).toBe(true);
    });

    it("should return false when comparing with undefined", () => {
      expect(valueObject.equals(undefined)).toBe(false);
    });

    it("should return false when comparing with an object with undefined props", () => {
      const valueObjectWithUndefinedProps = { value: undefined };
      // @ts-ignore for test purposes
      expect(valueObject.equals(valueObjectWithUndefinedProps)).toBe(false);
    });

    it("should return false when comparing with a different object value", () => {
      const valueObject2 = new TestValueObject({ value: 2 });
      expect(valueObject.equals(valueObject2)).toBe(false);
    });
  });
});
