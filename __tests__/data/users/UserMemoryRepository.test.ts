import { UserMemoryRepository } from "../../../data/user/UserMemoryRepository";
import { mockUser1 } from "../../fixtures/entities";

describe("UserMemoryRepository", () => {
  let repository: UserMemoryRepository;

  beforeEach(() => {
    repository = new UserMemoryRepository();
  });

  it("should initialize with an empty user list", async () => {
    const users = await repository.getAll();
    expect(users).toEqual([]);
  });

  it("should add a user to the repository", async () => {
    await repository.create(mockUser1);
    const users = await repository.getAll();

    expect(users).toHaveLength(1);
    expect(users[0]!.email.value).toBe("test@example1.com");
  });
});
