import type { User } from "@Models/User";
import { PrismaClient } from "generated/prisma";
import type { IUserRepository } from "@Repositories/IUserRepository";

export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaClient) {};

  async list(): Promise<User.Records> {
    return this.prisma.user.findMany();
  };

  async findById(id: number): Promise<User.Entity | null> {
    return this.prisma.user.findUnique({ where: { id } });
  };

  async findByName(name: string): Promise<User.Entity | null> {
    return this.prisma.user.findUnique({ where: { name } });
  };

  async findByEmail(email: string): Promise<User.Entity | null> {
    return this.prisma.user.findUnique({ where: { email } });
  };
};