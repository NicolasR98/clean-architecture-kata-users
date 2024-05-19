import { GetAllUsersUseCase } from "../../../../domain/use-cases/users/GetAllUsersUseCase";
import { mockUsers } from "../../../fixtures/entities";
import { mockUserRepository } from "../../../fixtures/repositories";


describe("GetUsersUseCase", () => {
  let getAllUsersUseCase: GetAllUsersUseCase;

  beforeEach(() => {
    jest.clearAllMocks();

    getAllUsersUseCase = new GetAllUsersUseCase(mockUserRepository);
  });

  it("should retrieve users successfully", async () => {
    mockUserRepository.getAll.mockResolvedValue(mockUsers);

    const result = await getAllUsersUseCase.execute();

    expect(mockUserRepository.getAll).toHaveBeenCalled();
    expect(result).toEqual(mockUsers);
  });

  it("should handle repository error", async () => {
    mockUserRepository.getAll.mockRejectedValue(
      new Error("Repository error")
    );

    await expect(getAllUsersUseCase.execute()).rejects.toThrow("Repository error");

    expect(mockUserRepository.getAll).toHaveBeenCalled();
  });
});
