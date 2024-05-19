import { User } from "../entities/UserEntity";

export interface UserRepository {
    getAll(): Promise<User[]>
    create(user: User): Promise<void>
}