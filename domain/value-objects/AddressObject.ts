import { isStringEmpty } from "../../utils/validations";
import { ValueObject } from "./shared/ValueObject";

export interface AddressProps {
  address: string;
  city: string;
  code: string;
  zip: string;
}

export class Address extends ValueObject<AddressProps> {
  private constructor(props: AddressProps) {
    super(props);
  }

  public get value(): AddressProps {
    return this.props;
  }

  public static create(address: AddressProps): Address {
    if (isStringEmpty(address.address)) {
      throw new Error("Address is required");
    }

    if (isStringEmpty(address.city)) {
      throw new Error("City is required");
    }

    if (isStringEmpty(address.code)) {
      throw new Error("Code is required");
    }

    if (isStringEmpty(address.zip)) {
      throw new Error("Zip is required");
    }

    return new Address(address);
  }
}
