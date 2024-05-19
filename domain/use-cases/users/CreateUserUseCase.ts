import { User } from "../../entities/UserEntity";
import { UserRepository } from "../../repositories/UserRepository";

export class CreateUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(user: User): Promise<void> {
    await this._checkIfUserCanBeCreated(user);
    await this.userRepository.create(user);
  }

  private async _checkIfUserCanBeCreated(user: User) {
    const usersResponse = await this.userRepository.getAll();
    
    usersResponse.forEach((userResponse) => {
      const userHasSameEmail = userResponse.email.equals(user.email);
      const userDomain = user.email.value.split("@")[1];
      const userInStorageDomain = userResponse.email.value.split("@")[1];

      if (userHasSameEmail) {
        throw new Error("There is already an existing email");
      }

      if (userDomain === userInStorageDomain) {
        throw new Error("There is already an existing domain");
      }
    });
  }
}
