import { Entity } from "../../../../domain/entities/shared/Entity";
import { Id } from "../../../../domain/value-objects/shared/IdObject";

class TestEntity extends Entity<any> {
  constructor(id: Id) {
    super(id);
  }
}
const entityId = Id.create("123ABC");
const entity = new TestEntity(entityId);

describe("Entity", () => {
  describe("Create instance", () => {
    it("should create an instance of Entity", () => {
      expect(entity).toBeInstanceOf(Entity);
      expect(entityId.equals(entity.id));
    });
  });

  describe("equal method", () => {
    it("should return true when comparing two equals id entities instances", () => {
      const entity2 = new TestEntity(entityId);

      expect(entity.equals(entity2)).toBe(true);
    });

    it("should return false when comparing two different entities instances", () => {
      const entityId = Id.create("QWERTY9876");
      const entity2 = new TestEntity(entityId);

      expect(entity.equals(entity2)).toBe(false);
    });

    it("should return false if compared with null or undefined", () => {
      // @ts-ignore for test purposes
      expect(entity.equals(null)).toBe(false);
      expect(entity.equals(undefined)).toBe(false);
    });
  });
});
