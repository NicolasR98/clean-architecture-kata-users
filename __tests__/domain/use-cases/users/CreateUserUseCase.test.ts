import { User } from "../../../../domain/entities/UserEntity";
import { CreateUserUseCase } from "../../../../domain/use-cases/users/CreateUserUseCase";
import { mockUsers } from "../../../fixtures/entities";
import { mockUserRepository } from "../../../fixtures/repositories";

describe("CreateUserUseCase", () => {
  let createUserUseCase: CreateUserUseCase;

  beforeEach(() => {
    jest.clearAllMocks();

    createUserUseCase = new CreateUserUseCase(mockUserRepository);
  });

  it("should create an user successfully", async () => {
    mockUserRepository.getAll.mockResolvedValue(mockUsers);

    const user = User.create(userData);

    await createUserUseCase.execute(user);

    expect(mockUserRepository.create).toHaveBeenCalled();
  });

  it("should raise an error if trying to create a user with an existing email", async () => {
    mockUserRepository.getAll.mockResolvedValue(mockUsers);

    const user = User.create({ ...userData, email: "test@example1.com" });

    await expect(createUserUseCase.execute(user)).rejects.toThrow(
      "There is already an existing email"
    );

    expect(mockUserRepository.create).not.toHaveBeenCalled();
  });

  it("should raise an error if trying to create a user with an existing domain", async () => {
    mockUserRepository.getAll.mockResolvedValue(mockUsers);

    const user = User.create({ ...userData, email: "test3@example1.com" });

    await expect(createUserUseCase.execute(user)).rejects.toThrow(
      "There is already an existing domain"
    );

    expect(mockUserRepository.create).not.toHaveBeenCalled();
  });
});

const userData = {
  id: "3",
  address: {
    address: "456 Elm St",
    city: "Los Angeles",
    code: "LA",
    zip: "90001",
  },
  email: "test3@example3.com",
  name: "Kiki Smith",
  password: "password123",
};
