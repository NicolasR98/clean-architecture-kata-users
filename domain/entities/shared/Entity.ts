import { Id } from "../../value-objects/shared/IdObject";

const isEntity = (value: any): value is Entity<any> => value instanceof Entity;

export interface EntityData {
  id: Id;
}

export abstract class Entity<T> implements EntityData {
  protected constructor(public id: Id) {}

  public equals(obj?: Entity<T>): boolean {
    if (obj === null || obj === undefined) {
      return false;
    }

    if (this === obj) {
      return true;
    }

    if (!isEntity(obj)) {
      return false;
    }

    return this.id.equals(obj.id);
  }
}
