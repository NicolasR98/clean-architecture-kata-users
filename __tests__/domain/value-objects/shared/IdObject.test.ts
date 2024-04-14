import { Id } from "../../../../domain/value-objects/shared/IdObject";

describe("Id", () => {
  describe("equals method", () => {
    it("should validate as equals two same Ids", () => {
      const IdStr = "123ABC";
      const Id1 = Id.create(IdStr);
      const Id2 = Id.create(IdStr);

      expect(Id1.equals(Id2)).toBe(true);
    });

    it("should validate as different two different Ids", () => {
      const Id1 = Id.create("123ABC");
      const Id2 = Id.create("ABC123");

      expect(Id1.equals(Id2)).toBe(false);
    });
  });

  describe("generate method", () => {
    it("should generate a new Id", () => {
      const id = Id.generate();

      expect(typeof id.value).toBe("string");
      expect(id).toBeInstanceOf(Id);
    });
  });
});
