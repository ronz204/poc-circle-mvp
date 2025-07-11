import type { User } from "@Models/User";

export interface IUserRepository {
  list(): Promise<User.Records>;
  findById(id: number): Promise<User.Entity | null>;
  findByName(name: string): Promise<User.Entity | null>;
  findByEmail(email: string): Promise<User.Entity | null>;
};