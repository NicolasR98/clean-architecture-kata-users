import { Address, AddressProps } from "../value-objects/AddressObject";
import { Email } from "../value-objects/EmailObject";
import { Name } from "../value-objects/NameObject";
import { Password } from "../value-objects/PasswordObject";
import { Id } from "../value-objects/shared/IdObject";
import { Entity } from "./shared/Entity";

export interface UserData {
  id?: string;
  address: AddressProps;
  email: string;
  name: string;
  password: string;
}

export interface UserObjectData {
  id: Id;
  address: Address;
  email: Email;
  name: Name;
  password: Password;
}
// Entity should not be generic
export class User extends Entity<UserObjectData> {
  public id: Id;
  public readonly email: Email;
  protected readonly address: Address;
  protected readonly name: Name;
  protected readonly password: Password;

  private constructor(data: UserObjectData) {
    super(data.id);
    this.address = data.address;
    this.email = data.email;
    this.name = data.name;
    this.password = data.password;
  }

  public static create(data: UserData): User {
    // Add error managment
    const userObjectData: UserObjectData = {
      id: data.id ? Id.create(data.id) : Id.generate(),
      name: Name.create(data.name),
      email: Email.create(data.email),
      password: Password.create(data.password),
      address: Address.create(data.address),
    };

    return new User(userObjectData);
  }
}
