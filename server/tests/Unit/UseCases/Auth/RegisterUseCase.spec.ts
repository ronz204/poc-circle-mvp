import { describe, expect, it, vi } from "vitest";

import { ValidationError } from "yup";
import { Inversify } from "@Configs/Inversify";
import { PrismaClient } from "generated/prisma";

import { TokenService } from "@Services/Token/TokenService";
import { LogicException } from "@Exceptions/LogicException";
import { BcryptService } from "@Services/Bcrypt/BcryptService";

import { RegisterUseCaseFixture } from "./RegisterUseCaseFixture";
import { RegisterUseCase } from "@UseCases/Auth/Register/RegisterUseCase";

describe("register use case", () => {
  const prisma = Inversify.get(PrismaClient);
  const useCase = Inversify.get(RegisterUseCase);

  const { user, command } = RegisterUseCaseFixture;

  it("should register a new user", async () => {
    vi.spyOn(prisma.user, "findFirst").mockResolvedValue(null);
    vi.spyOn(TokenService, "sign").mockResolvedValue("mocked-token");
    vi.spyOn(BcryptService, "hash").mockResolvedValue("hashed-password");
    vi.spyOn(prisma.user, "create").mockResolvedValue({ ...user, password: "hashed-password" });

    const response = await useCase.execute(command.valid);
    expect(response.token).toEqual("mocked-token");
  });

  it("should throw Redundancy exception if user exists", async () => {
    vi.spyOn(prisma.user, "findFirst").mockResolvedValue(user);
    await expect(useCase.execute(command.valid)).rejects.toThrow(LogicException.Redundancy);
  });

  it("should validate invalid input data", async () => {
    await expect(useCase.execute(command.invalid)).rejects.toThrow(ValidationError);
  });
});
