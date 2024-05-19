import { User } from "../../domain/entities/UserEntity";

export const mockUser1 = User.create({
  id: "1",
  address: {
    address: "123 Main St",
    city: "New York",
    code: "NY",
    zip: "10001",
  },
  email: "test@example1.com",
  name: "John Doe",
  password: "password123",
});

export const mockUser2 = User.create({
  id: "2",
  address: {
    address: "456 Elm St",
    city: "Los Angeles",
    code: "LA",
    zip: "90001",
  },
  email: "test2@example2.com",
  name: "Jane Smith",
  password: "password123",
});

export const mockUsers = [mockUser1, mockUser2];
