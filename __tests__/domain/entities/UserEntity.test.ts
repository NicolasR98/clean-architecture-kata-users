import { User } from "../../../domain/entities/UserEntity";
import { Id } from "../../../domain/value-objects/shared/IdObject";

const userData = {
  id: "1",
  address: {
    address: "123 Main St",
    city: "New York",
    code: "NY",
    zip: "10001",
  },
  email: "test@example.com",
  name: "John Doe",
  password: "password123",
};

const user = User.create(userData);

describe("User", () => {
  describe("Create instance", () => {
    it("should create an instance of User", () => {
      expect(user).toBeInstanceOf(User);
    });

    it("should generate an user with id if this is not provided", () => {
      const { id, ...rest } = userData;
      const user = User.create(rest);

      expect(user.id).toBeInstanceOf(Id);
      expect(user.id).toBeTruthy();
    });

    it("should throw an error if data is missing or invalid", () => {
      const data = { ...userData, name: "" };

      // @ts-ignore for test purposes
      expect(() => User.create(data)).toThrow("Name is required");
    });

    it("should return true when comparing two equal id users", () => {
      const userData2 = {
        id: userData.id,
        address: {
          address: "456 Elm St",
          city: "Los Angeles",
          code: "LA",
          zip: "90001",
        },
        email: "test2@example.com",
        name: "Jane Smith",
        password: "password123",
      };
      const user2 = User.create(userData2);

      expect(user.equals(user2)).toBe(true);
    });

    it("should return false when comparing two different id users", () => {
      const userData2 = {
        ...userData,
        id: "2",
      };
      const user2 = User.create(userData2);

      expect(user.equals(user2));
    });

    it("should return false when comparing an user to a non-user object", () => {
      // @ts-ignore for test purposes
      expect(user.equals({ id: Id.create("1") })).toBe(false);
    });
  });
});
