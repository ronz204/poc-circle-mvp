import { faker } from "@faker-js/faker";
import type { User } from "generated/prisma";

export class UserFactory {
  public static async build(user: Partial<User>): Promise<User> {
    return {
      id: user.id ?? faker.number.int({ min: 1, max: 1000 }),
      name: user.name ?? faker.person.fullName(),
      email: user.email ?? faker.internet.email(),
      password: user.password ?? faker.internet.password(),
      biography: user.biography ?? faker.lorem.sentence(),
      pictureUrl: user.pictureUrl ?? faker.image.avatar(),
      createdAt: user.createdAt ?? new Date(),
      updatedAt: user.updatedAt ?? new Date(),
    };
  };
};