import { User, UserData } from "../../domain/entities/UserEntity";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class UserMemoryRepository implements UserRepository {
  constructor(private users: UserData[] = []) {}

  async getAll(): Promise<User[]> {
    return new Promise<User[]>((resolve) =>
      resolve(this.users.map(this._mapToDomain))
    );
  }

  create(user: User): Promise<void> {
    return new Promise((resolve) => {
      this.users.push(user.toData());
      resolve();
    });
  }

  private _mapToDomain(user: UserData): User {
    return User.create(user);
  }
}
