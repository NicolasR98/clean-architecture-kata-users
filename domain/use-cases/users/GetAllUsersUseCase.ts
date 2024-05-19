import { User } from "../../entities/UserEntity";
import { UserRepository } from "../../repositories/UserRepository";

export class GetAllUsersUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<User[]> {
    return await this.userRepository.getAll();
  }
}
