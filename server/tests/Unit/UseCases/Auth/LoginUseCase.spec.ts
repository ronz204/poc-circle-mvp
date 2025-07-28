import { describe, expect, it, vi } from "vitest";

import { ValidationError } from "yup";
import { Inversify } from "@Configs/Inversify";
import { PrismaClient } from "generated/prisma";

import { TokenService } from "@Services/Token/TokenService";
import { LogicException } from "@Exceptions/LogicException";
import { BcryptService } from "@Services/Bcrypt/BcryptService";

import { LoginUseCaseFixture } from "./LoginUseCaseFixture";
import { LoginUseCase } from "@UseCases/Auth/Login/LoginUseCase";

describe("login use case", () => {
  const prisma = Inversify.get(PrismaClient);
  const useCase = Inversify.get(LoginUseCase);

  const { user, command } = LoginUseCaseFixture

  it("should login a user with email and password", async () => {
    vi.spyOn(prisma.user, "findFirst").mockResolvedValue(user);
    vi.spyOn(BcryptService, "compare").mockResolvedValue(true);
    vi.spyOn(TokenService, "sign").mockResolvedValue("mocked-token");

    const response = await useCase.execute(command.valid);
    expect(response.token).toEqual("mocked-token");
  });

  it("should throw BadCredentials exception", async () => {
    vi.spyOn(prisma.user, "findFirst").mockResolvedValue(user);
    vi.spyOn(BcryptService, "compare").mockResolvedValue(false);
    await expect(useCase.execute(command.valid)).rejects.toThrow(LogicException.BadCredentials);
  });

  it("should throw NotFound exception", async () => {
    vi.spyOn(prisma.user, "findFirst").mockResolvedValue(null);
    await expect(useCase.execute(command.valid)).rejects.toThrow(LogicException.NotFound);
  });

  it("should validate invalid input data", async () => {
    await expect(useCase.execute(command.invalid)).rejects.toThrow(ValidationError);
  });
});