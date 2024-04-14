import { isStringEmpty, validateRegexp } from "../../utils/validations";
import { ValueObject } from "./shared/ValueObject";

const EMAIL_REGEX_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

interface EmailProps {
  value: string;
}

export class Email extends ValueObject<EmailProps> {
  private constructor(props: EmailProps) {
    super(props);
  }

  public get value(): string {
    return this.props.value;
  }

  public static create(email: string): Email {
    if (isStringEmpty(email)) {
      throw new Error("Email is required");
    }

    if (!validateRegexp(EMAIL_REGEX_PATTERN, email)) {
      throw new Error("Invalid Email format");
    }

    return new Email({ value: email });
  }
}
