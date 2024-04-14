import { Name } from "../../../domain/value-objects/NameObject";

describe("Name", () => {
  describe("equals method", () => {
    it("should validate as equals two same names", () => {
      const NameStr = "Nicolas";
      const Name1 = Name.create(NameStr);
      const Name2 = Name.create(NameStr);

      expect(Name1.equals(Name2)).toBe(true);
    });

    it("should validate as different two different names", () => {
      const Name1 = Name.create("Diego");
      const Name2 = Name.create("Nicolas");

      expect(Name1.equals(Name2)).toBe(false);
    });
  });
});
