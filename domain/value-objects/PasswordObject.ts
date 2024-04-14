import { isStringEmpty, validateRegexp } from "../../utils/validations";
import { ValueObject } from "./shared/ValueObject";

// PATTERN: Min 8 chars, contain at least one letter and a number
const PASSWORD_REGEX_PATTERN = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

export interface PasswordProps {
  value: string;
}

export class Password extends ValueObject<PasswordProps> {
  private constructor(props: PasswordProps) {
    super(props);
  }

  public get value(): string {
    return this.props.value;
  }

  public static create(password: string): Password {
    if (isStringEmpty(password)) {
      throw new Error("Password is required");
    }

    if (!validateRegexp(PASSWORD_REGEX_PATTERN, password)) {
      throw new Error("Invalid Password format");
    }

    return new Password({ value: password });
  }
}
