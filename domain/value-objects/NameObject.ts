import { isStringEmpty } from "../../utils/validations";
import { ValueObject } from "./shared/ValueObject";

export interface NameProps {
  value: string;
}

export class Name extends ValueObject<NameProps> {
  private constructor(props: NameProps) {
    super(props);
  }

  public get value(): string {
    return this.props.value;
  }

  public static create(name: string): Name {
    if (isStringEmpty(name)) {
      throw new Error("Name is required");
    }

    return new Name({ value: name });
  }
}
