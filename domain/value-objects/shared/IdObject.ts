import { isStringEmpty } from "../../../utils/validations";
import { ValueObject } from "./ValueObject";

export interface IdProps {
  value: string;
}

export class Id extends ValueObject<IdProps> {
  private constructor(props: IdProps) {
    super(props);
  }

  public get value(): string {
    return this.props.value;
  }

  public static create(id: string): Id {
    if (isStringEmpty(id)) {
      throw new Error("Id is required");
    }

    return new Id({ value: id });
  }

  public static generate(): Id {
    return Id.create(crypto.randomUUID());
  }
}
